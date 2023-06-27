<script setup lang="ts">
import { reactive } from 'vue';

import _ from "lodash";

let query = "";

// NOTE: Production
// const baseUrl = "https://services.topick.fyi";
// NOTE: Local dev
const baseUrl = "http://localhost:8080";

type SearchState = {
  query: string,
  results: string[],
  isLoading?: boolean,
};

const state = reactive<SearchState>({
  query: query,
  results: [],
});

const submitSearch = _.debounce(async () => {
    if (state.query === "") {
      return;
    }
    state.isLoading = true;
    const data = await fetch(`${baseUrl}/api/v1/topic?search=${state.query}`);
    const json = await data.json();
    state.results = json.items;
    state.isLoading = false;
  }, 250);
</script>

<template>
  <main>
    <h1>Topick</h1>
    <div>
      <input id="search" v-model="state.query" placeholder="What kind of thing are you looking for?" class="search-box" />
      <button id="submit-search" @click="submitSearch">Search</button>
    </div>

    <div>
      <ul v-if="!state.isLoading">
        <li v-for="result in state.results">
          {{ result }}
        </li>
      </ul>
      <span v-if="state.isLoading">
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
