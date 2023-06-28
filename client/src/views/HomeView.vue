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

const submitSearch = Lib.buildDebounceAsync<boolean>(async () => {
  if (state.query === "") {
    return false;
  }
  state.isLoading = true;
  try {
    const data = await fetch(`${Constants.BaseUrl}/api/v1/topic?search=${state.query}`);
    const json = await data.json();
    state.results = json.items;
    state.resultObjectKeys = state.results.length > 0 ? Object.keys(state.results[0]) : [];
  }
  catch (err: any) {
    state.results = [
      `Failed to query API: ${err}`,
    ];
    state.resultObjectKeys = [
      'Error'
    ];
  }
  finally {
    state.isLoading = false;
  }

  return false;
});
</script>

<template>
  <main>
    <h1>Topick</h1>
    <div>
      <form onsubmit="return false">
        <input id="search" v-model="state.query" placeholder="What kind of thing are you looking for?" class="search-box" />
        <button id="submit-search" @click="submitSearch">Search</button>
      </form>
    </div>

    <div v-if="!state.isLoading && state.results.length > 0">
      <table>
        <caption>Search results</caption>
        <thead>
          <tr>
            <th v-for="key in state.resultObjectKeys">{{ key }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="result in state.results">
            <td v-for="key in state.resultObjectKeys">{{ result[key] }}</td>
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
</style>
