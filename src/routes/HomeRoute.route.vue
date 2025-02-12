<script async setup>
import axios from "axios";
import Card from "@/components/FruitCard.vue";
import { onMounted, ref } from "vue";

const items = ref([]);
const search = ref("");
async function getCall() {
  const data = await axios.get(
    `https://foodia-ay-api.vercel.app/fruits?name=${search.value}`
  );
  items.value = data.data.result;
}
</script>

<template>
  <div class="layout">
    <h1>Search</h1>
    <div id="checkboxD">
      <input id="txt" type="text" placeholder="Banana" v-model="search" />
      <label for="checkbox" class="search-option"
        >Vitamins
        <input type="checkbox" name="" id="checkbox" />
      </label>
    </div>
    <button id="Enter" @click="getCall">Enter</button>
    <div id="result">
      <Card v-for="item in items" :key="item.name">
        <template #Title>{{ item.name }}</template>
        <template #Vitamins>
          <ul>
            <li v-for="vitamin in item.vitamins">{{ vitamin }}</li>
          </ul>
        </template>
        <template #Nutrients>
          <ul>
            <li v-for="nutrient in item.nutrient">{{ nutrient }}</li>
          </ul></template
        >
      </Card>
    </div>
  </div>
</template>

<style scoped>
#result {
  display: flex;
  gap: 20px;
  margin: 0 20px 20px 20px;
  flex-wrap: wrap;
}
#result > * {
  flex: 1;
  min-width: 200px;
  height: auto;
}
.search-option {
  position: relative;
  margin-left: -72px;
  left: 100px;
}
.layout {
  display: flex;
  flex-direction: column;
  align-items: center;
}
h1 {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 5em;
}
input[type="text"],
#Enter {
  text-align: center;
  outline: none;
  background-color: #4db8ff;
  border: 4px solid #5588ff;
  border-radius: 100px;
  width: 200px;
  height: 40px;
  font-size: 2rem;
  color: white;
}
#Enter {
  background-color: #5588ff !important;
  border: 5px solid #4db8ff !important;
  cursor: pointer;
  font-weight: bolder;
  height: 50px;
  width: 200px;
  transition: 0.5s;
}
#Enter:hover {
  background-color: #4db8ff !important;
  border: 5px solid #5588ff !important;
}
/* #checkboxD {
  position: relative;
  bottom: 210px;
  left: 140px;
  transform: translate(-50%, -50%);
}
#checkboxD label {
  position: relative;
  left: 3px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
} */
</style>
