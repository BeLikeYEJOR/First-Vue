<template>
  <div class="card-body">
    <h2>
      <slot name="title"></slot>
    </h2>
    <slot></slot>
  </div>
</template>

<style lang="css" scoped>
.card-body {
  padding: 16px;
  border: 1px solid black;
  border-radius: 16px;
  background-color: antiquewhite;
  color: black;
}
</style>