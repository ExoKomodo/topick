<script setup lang="ts">
import { reactive } from 'vue';

import _ from "lodash";
import Lib from '@/lib';
import Constants from '@/constants';

let query = "";

type SearchState = {
  query: string,
  results: any[],
  resultObjectKeys: string[],
  isLoading?: boolean,
};

const state = reactive<SearchState>({
  query: query,
  results: [],
  resultObjectKeys: [],
});

const submitSearch = Lib.buildDebounceAsync(async () => {
  if (state.query === "") {
    return;
  }
  state.isLoading = true;
  try {
    // const data = await fetch(`${Constants.BaseUrl}/api/v1/topic?search=${state.query}`);
    // const json = await data.json();
    //state.results = json.items;
    state.results = [
      {
        "item": "Prego Traditional Pasta Sauce",
        "url": "https://www.prego.com/our-sauces/traditional/"
      },
      {
        "item": "Rao's Homemade Marinara Sauce",
        "url": "https://www.raos.com/products/marinara-sauce/"
      },
      {
        "item": "Barilla Traditional Pasta Sauce",
        "url": "https://www.barilla.com/en-us/products/sauces/traditional-pasta-sauce"
      },
      {
        "item": "Classico Tomato and Basil Pasta Sauce",
        "url": "https://www.classico.com/product/00041129077607/tomato-basil"
      },
      {
        "item": "Hunt's Tomato Sauce",
        "url": "https://www.hunts.com/products/tomato-sauce"
      },
      {
        "item": "Bertolli Organic Traditional Tomato & Basil Sauce",
        "url": "https://www.bertolli.com/sauces/organic-traditional-tomato-basil-sauce/"
      },
      {
        "item": "Newman's Own Marinara Sauce",
        "url": "https://www.newmansown.com/foods/marinara-sauce/"
      },
      {
        "item": "Ragu Old World Style Traditional Sauce",
        "url": "https://www.ragu.com/our-sauces/old-world-style/ragu-old-world-style-traditional-sauce/"
      },
      {
        "item": "Mezzetta Napa Valley Homemade Tomato & Sweet Basil Sauce",
        "url": "https://www.mezzetta.com/our-products/detail/napa-valley-homemade/tomato-sweet-basil"
      },
      {
        "item": "DeLallo Pomodoro Fresco Tomato Sauce",
        "url": "https://www.delallo.com/shop/sauces/pomodoro-fresco-tomato-sauce/"
      }
    ];
    state.resultObjectKeys = state.results.length > 0 ? Object.keys(state.results[0]) : [];
  }
  catch (err: any) {
    state.results = [
      {
        'item': `Failed to query API: ${err}`,
      },
    ];
    state.resultObjectKeys = [
      'item',
    ];
  }
  finally {
    state.isLoading = false;
  }
});
</script>

<template>
  <main>
    <h1>Topick</h1>
    <div>
      <form onsubmit="return false">
        <input id="search" v-model="state.query" placeholder="What kind of thing are you looking for?"
          class="search-box" />
        <button id="submit-search" @click="submitSearch">Search</button>
      </form>
    </div>

    <div v-if="!state.isLoading && state.results.length > 0">
      <table>
        <caption>Search results</caption>
        <thead>
          <tr>
            <th v-for="key in state.resultObjectKeys">{{ key }}</th>
            <th>More?</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="result in state.results">
            <td v-for="key in state.resultObjectKeys">
              <a v-if="key === 'url'" :href="result[key]" target="_blank">{{ result[key] }}</a>
              <span v-else>{{ result[key] }}</span>
            </td>
            <td><a :href="`https://duckduckgo.com/?q=${result.item}`">DuckDuckGo</a></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-if="state.isLoading">
      <span>
        Topick is querying the oracle...
      </span>
    </div>
  </main>
</template>

<style scoped>
.search-box {
  width: 16rem;
  margin-right: 1rem;
}

th,
td {
  border-bottom: 1px solid white;
}
</style>
