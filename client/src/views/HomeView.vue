<script setup lang="ts">
let query = "";

// NOTE: Production
// const baseUrl = "https://services.topick.fyi";
// NOTE: Local dev
const baseUrl = "http://localhost:8080";

async function submitSearch() {  
  const data = await fetch(`${baseUrl}/api/v1/topic?search=${query}`);
  const json = await data.json();
  console.log(json);
}
</script>

<template>
  <main>
    <h1>Topick</h1>
    <div>
      <input id="search" v-model="query" placeholder="What kind of thing are you looking for?" class="search-box" />
      <button id="submit-search" @click="submitSearch">Search</button>
    </div>
  </main>
</template>

<style scoped>
.search-box {
  width: 16rem;
  margin-right: 1rem;
}
</style>
