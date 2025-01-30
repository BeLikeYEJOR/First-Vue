<script setup>
import NewBtn from "./components/setButton.vue";
import CloseSVG from "./components/icons/closeSVG.vue";
import { ref, watch } from "vue";
const name = "World";
let txt = ref("");
function clearText() {
  txt.value = "";
}
watch(txt, (newValue) => {
  otherBtn.onclick = () => {
    window.open(`https://${newValue}.com`, "_blank").focus();
  };
});
</script>

<template>
  <h1>Type In Whatever You Want!</h1>
  <input
    type="text"
    id="buttonText"
    v-model="txt"
    placeholder="Type In This Box!"
  />
  <a id="closeSvg" @click="clearText"><CloseSVG></CloseSVG></a>
  <NewBtn id="otherBtn" class="green">{{ txt }}</NewBtn>
</template>

<style scoped>
#otherBtn {
  position: relative;
  bottom: 70px;
  color: #00bd7e;
  transition: 0.4s;
  padding: 3px;
}
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
#closeSvg {
  position: relative;
  bottom: 63px;
  left: 75px;
  border-radius: 200px;
}
#closeSvg:hover {
  background-color: red;
  filter: blur(20px);
  box-shadow: 0 0 3px 3px red;
}
</style>
