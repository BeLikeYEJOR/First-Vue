<template>
  <div class="toDo">
    <button class="green"><slot></slot></button>
  </div>
</template>

<style scoped>
button {
  background-color: #2b2b2b;
  border: 1px solid #313131;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
}
/* button {
  position: relative;
  bottom: 70px;
  color: #00bd7e;
  transition: 0.4s;
  padding: 3px; 
} */
</style>

<script setup></script>
