import { Express } from "express";
import Constants from "../../../constants";
import * as openai from "../../../lib/openai";
import { AxiosResponse } from "axios";
import { ChatCompletionRequestMessageRoleEnum, CreateChatCompletionResponse } from "openai";

const client = openai.getClient();

const endpointPrefix = Constants.Api.V1.Topic.Prefix;

export type Model =
    | 'gpt-3.5-turbo'
    | 'gpt-4'
    | 'text-davinci-003'

export type TopicQueryParams = {
    search: string,
    count?: number,
    model?: Model
};

export type TopickErrorKind =
    | 'model-invalid-json'
    | 'model-unsupported'
    | 'model-unknown'
    | 'unknown'

type TopickErrorRecord = {
    name: TopickErrorKind
    message: string
    cause: any
}

export class TopickError extends Error {
    data: TopickErrorRecord

    constructor(data: TopickErrorRecord) {
        super();
        this.data = data;
    }

    getStatusCode(): number {
        switch (this.data.name) {
            case 'model-unsupported':
                return 400;
            case 'model-unknown':
                return 404;
            case 'unknown':
                return 500;
        }
    }
}

export type TopickResults<T> = {
    items: T[]
    count: number
}
export async function searchTopickAsync({ search, count, model }: TopicQueryParams): Promise<TopickResults<string>> {
    /*
        Examples:
        curl  -X GET \
        'http://localhost:8080/api/v1/topic?search=code%20editors%20for%20music%20industry&count=10&model=gpt-3.5-turbo' \
        --header 'Accept: application/json'
        {
            "items": [
            "VSCode",
            "Sublime Text",
            "Atom",
            "Notepad++",
            "Coda",
            "TextMate",
            "Brackets",
            "WebStorm",
            "Emacs",
            "Vim"
            ],
            "count": 10
        }
        curl  -X GET \
        'http://localhost:8080/api/v1/topic?search=code%20editors%20for%20music%20industry&count=10&model=gpt-3.5-turbo' \
        --header 'Accept: application/json'
        {
            "items": [
            "Ableton Live",
            "Logic Pro X",
            "Pro Tools",
            "FL Studio",
            "Cubase",
            "GarageBand",
            "Reason",
            "Bitwig Studio",
            "Studio One",
            "Reaper"
            ],
            "count": 10
        }
        Received this surprise:
        {
            "items": [
                {
                "name": "Sonic Pi",
                "description": "A live coding music synthesizer",
                "website": "https://sonic-pi.net/"
                },
                {
                "name": "Max/MSP",
                "description": "A visual programming language for music and multimedia",
                "website": "https://cycling74.com/products/max"
                },
                {
                "name": "SuperCollider",
                "description": "An environment and programming language for real-time audio synthesis and algorithmic composition",
                "website": "https://supercollider.github.io/"
                },
                {
                "name": "ChucK",
                "description": "A programming language for real-time sound synthesis and music creation",
                "website": "https://chuck.cs.princeton.edu/"
                },
                {
                "name": "Csound",
                "description": "A software synthesizer and programming language for sound synthesis and music composition",
                "website": "https://csound.com/"
                },
                {
                "name": "OpenMusic",
                "description": "A visual programming language for music composition",
                "website": "https://repmus.ircam.fr/openmusic/home"
                },
                {
                "name": "Pure Data",
                "description": "A visual programming language for multimedia and music creation",
                "website": "https://puredata.info/"
                },
                {
                "name": "Nyquist",
                "description": "A sound synthesis and music composition language",
                "website": "https://www.cs.cmu.edu/~music/nyquist/"
                },
                {
                "name": "Faust",
                "description": "A programming language for sound synthesis and audio processing",
                "website": "https://faust.grame.fr/"
                },
                {
                "name": "TidalCycles",
                "description": "A live coding environment for musical pattern manipulation",
                "website": "https://tidalcycles.org/"
                }
            ],
            "count": 10
        }
    */

    // NOTE: By reassigning, we allow for a static type check on the model kind
    model = model ?? 'gpt-3.5-turbo';
    const prompt = `What are the top ${count ?? 10} ${search}`;
    switch (model) {
        case 'gpt-3.5-turbo':
            const chatCompletion: AxiosResponse<CreateChatCompletionResponse> = await client.createChatCompletion({
                model: model,
                messages: [
                    {

                        'content': 'You will respond to me exclusively with valid JSON arrays of objects',
                        'name': 'setup-json',
                        'role': ChatCompletionRequestMessageRoleEnum.System,
                    },
                    {
                        'content': 'The identifying field will be "item"',
                        'name': 'setup-identifying-field',
                        'role': ChatCompletionRequestMessageRoleEnum.System,
                    },
                    {
                        'content': 'You will include a url field',
                        'name': 'setup-url-field',
                        'role': ChatCompletionRequestMessageRoleEnum.System,
                    },
                    {
                        'content': prompt,
                        'name': 'query',
                        'role': ChatCompletionRequestMessageRoleEnum.User,
                    }
                ],
                temperature: 0.6,
            });

            let chatItems: string[] = [];
            const content = chatCompletion.data.choices[0].message.content
            try {
                chatItems = JSON.parse(content) as string[];
            } catch (err: any) {
                throw new TopickError({
                    name: 'model-invalid-json',
                    message: `Model (${model}) produced invalid json`,
                    cause: content,
                });
            }
            return {
                items: chatItems,
                count: chatItems.length,
            };
        case 'text-davinci-003':
        case 'gpt-4':
            throw new TopickError({
                name: 'model-unsupported',
                message: `Model (${model}) is unsupported`,
                cause: model,
            });
        default:
            throw new TopickError({
                name: 'model-unknown',
                message: `Model (${model}) is unknown`,
                cause: model,
            });
    }
}

export function registerTopic(app: Express) {
    app.get(endpointPrefix, (req, res, next) => {
        // TODO: Do type checking on this
        const params = (req.query as unknown) as TopicQueryParams;
        searchTopickAsync(params).then(data => {
            res.send(data);
        }).catch(err => {
            if (err instanceof TopickError) {
                res.status(err.getStatusCode());
            }
            next(err);
        });
    });
}
