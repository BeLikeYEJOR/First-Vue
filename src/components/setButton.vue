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
</style>

<script setup></script>
