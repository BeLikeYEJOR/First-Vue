<script setup>
import NewBtn from "./components/setButton.vue";
import { ref, watch } from "vue";
const name = "World";
let txt = ref("");
function clearText() {
  txt.value = "";
}
function openWeb() {
  window.open(`https://${txt.value}.com`, "_blank").focus();
}
</script>

<template>
  <h1>Type In Whatever You Want!</h1>
  <input
    type="text"
    id="buttonText"
    v-model="txt"
    placeholder="Type In This Box!"
  />
  <a id="closeSvg" @click="clearText"
    ><img src="../public/Close.png" style="width: 40px; height: 40px"
  /></a>
  <NewBtn id="otherBtn" class="green" @click="openWeb">{{ txt }}</NewBtn>
</template>

<style scoped>
input[type="text"] {
  margin: 20px;
  margin-right: 0;
  margin-left: 0;
  padding: 10px;
  border-radius: 20px;
  outline: none;
  border: 3px solid #313131;
  background-color: #4e4e4e;
  color: white;
}
#closeSvg img {
  position: relative;
  bottom: 63px;
  left: 75px;
  display: inline-block;
  border-radius: 100%;
  background-color: transparent;
  text-align: center;
  overflow: visible;
  transition: 0.3;
}
#closeSvg img:hover {
  transition: 0.3;
  box-shadow: 0 0 20px 5px red;
}
</style>
