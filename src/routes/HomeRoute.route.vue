<script async setup>
import Card from "@/components/Card.vue";
import axios from "axios";
import { ref } from "vue";

const items = ref([]);
const searchTerm = ref("");

async function getCall() {
  const data = await axios.get(
    `https://foodia-ay-api.vercel.app/fruits?name=${searchTerm.value}`
  );
  items.value = data.data.result;
}
</script>

<template>
  <div class="layout">
    <h1>Search</h1>
    <div id="checkboxD">
      <input id="txt" type="text" placeholder="Banana" v-model="searchTerm" @keyup.enter="getCall" />
      <label for="checkbox" class="search-option">Vitamins
        <input type="checkbox" name="" id="checkbox" />
      </label>
    </div>
    <button id="Enter" @click="getCall">Enter</button>
    <hr style="width: 100%; margin: 12px;">
    <div class="result-layout">
      <Card v-for="item in items" :key="item.id">
        <template #title>{{ item.name }}</template>
        <ul>
          <li v-for="vitamin in item.vitamins">{{ vitamin }}</li>
        </ul>
      </Card>
    </div>
  </div>
</template>

<style scoped>
* {
  --primary-color: #4db8ff;
  --secondary-color: #5588ff;
  --font-color: white;
}

.layout {
  display: flex;
  gap: 8px;
  flex-direction: column;
  align-items: center;
}
.result-layout {
  padding: 20px;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin: 0 20px 20px 20px;
}
.result-layout > * {
  flex: 1;
  height: auto;
}

.search-option {
  position: relative;
  margin-left: -72px;
  left: 100px;
}
h1 {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 5em;
}
input[type="text"],
#Enter {
  text-align: center;
  outline: none;
  background-color: var(--primary-color);
  border: 2px solid var(--secondary-color);
  border-radius: 100px;
  width: 200px;
  height: 40px;
  font-size: 2rem;
  color: var(--font-color);
}
#Enter {
  background-color: var(--secondary-color) !important;
  border: 5px solid var(--primary-color) !important;
  cursor: pointer;
  font-weight: bolder;
  height: 50px;
  width: 200px;
  transition: 0.5s;
}
#Enter:hover {
  background-color: var(--primary-color) !important;
  border: 5px solid var(--secondary-color) !important;
}
</style>
