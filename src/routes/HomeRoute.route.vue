<script async setup>
import axios from "axios";
import { onMounted } from "vue";
onMounted(() => {
  const enterBtn = document.querySelector("#Enter");
  const TxtBox = document.querySelector("#txt");
  async function getCall() {
    let chosenFruit = TxtBox.value;
    const data = await axios.get(
      `https://foodia-ay-api.vercel.app/fruits?name=${chosenFruit}`
    );
    let result = data.data.result;
    result.forEach((fruit) => {
      console.log(`Name: ${fruit.name}`);
      fruit.vitamins.forEach((vitamin) => {
        console.log(`Vitamin for ${fruit.name}: ${vitamin}`);
      });
      for (const nutrient in fruit.nutrients) {
        console.log(`Nutrient for ${fruit.name}: ${nutrient}`);
      }
      console.log("");
    });
  }
  enterBtn.addEventListener("click", getCall);
});
</script>

<template>
  <div class="layout">
    <h1>Search</h1>
    <div id="checkboxD">
      <input id="txt" type="text" placeholder="Banana" />
      <label for="checkbox" class="search-option">Vitamins
        <input type="checkbox" name="" id="checkbox" />
      </label>
    </div>
    <button id="Enter">Enter</button>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.search-option {
  position: relative;
  margin-left: -72px;
  left: 100px;
}
h1 {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  top: 17%;
  left: 50%;
  font-size: 5em;
}
input[type="text"],
#Enter {
  text-align: center;
  outline: none;
  background-color: #4db8ff;
  border: 2px solid #5588ff;
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
