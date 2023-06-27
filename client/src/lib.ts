import _ from "lodash";
import Constants from "@/constants";

export default class Lib {
    static buildDebounce<T>(fn: () => T) {
        return _.debounce(() => fn(), Constants.DebounceInterval);
    }

    static buildDebounceAsync<T>(fn: () => T) {
        return _.debounce(async () => await fn(), Constants.DebounceInterval);
    }
}
