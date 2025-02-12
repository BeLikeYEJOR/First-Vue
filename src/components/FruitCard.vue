<template>
  <div id="container">
    <h1><slot name="Title"></slot></h1>
    <h2><slot name="Vitamins"></slot></h2>
    <h2><slot name="Nutrients"></slot></h2>
  </div>
</template>

<style scoped>
#container {
  background-color: #77aaff;
  border-radius: 20px;
  text-align: center;
}
</style>
