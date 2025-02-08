<script async setup>
import { onMounted } from "vue";
import axios from "axios";
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
  <h1>Search</h1>
  <div id="checkboxD">
    <input type="checkbox" name="" id="checkbox" />
    <label for="checkbox">Vitamins</label>
  </div>
  <input id="txt" type="text" placeholder="Banana" />
  <button id="Enter">Enter</button>
</template>

<style scoped>
h1 {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  position: absolute;
  top: 17%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 5em;
}
input[type="text"],
#Enter {
  text-align: center;
  position: absolute;
  top: 250px;
  transform: translate(-50%, -50%);
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
  top: 300px;
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
#checkboxD {
  position: relative;
  bottom: 210px;
  left: 140px;
  transform: translate(-50%, -50%);
}
#checkboxD label {
  position: relative;
  left: 3px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
</style>
