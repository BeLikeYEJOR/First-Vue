<script setup>
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import MenuSvg from "../src/components/icons/Menu.vue";

let isSideBarOpen = ref(false);
function toggleSidebar() {
  isSideBarOpen.value = !isSideBarOpen.value;
}
</script>

<template>
  <div class="container">
    <MenuSvg id="MenuSvg" @click="toggleSidebar"></MenuSvg>
    <Transition name="slide">
      <div v-if="isSideBarOpen" class="sidebar">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </div>
    </Transition>
    <header>
      <nav>
        <h1>FoodIA AAAY</h1>
        <div id="Links">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </div>
      </nav>
    </header>
    <main>
      <RouterView />
    </main>
  </div>

</template>

<style scoped>
.slide-enter-active, .slide-leave-active {
  transition: transform 0.3s ease-in-out;
}
.slide-enter-from, .slide-leave-to {
  transform: translateX(100%);
}
.slide-enter-to, .slide-leave-from {
  transform: translateX(0);
}
.sidebar {
  background-color: aliceblue;
  height: 100%;
  width: 200px;
  background-color: rgba(13, 0, 59, 0.5);
  position: fixed;
  right: 0;
  z-index: 6;
  overflow: hidden;
}
.container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 85px;
}
main {
  margin-top: 85px;
  flex-grow: 1;
}
.router-link-active {
  color: #004cff;
  font-weight: bolder;
}
body {
  margin: 0;
  padding: 0;
}
nav {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  background-color: #5588ff;
  position: fixed;
  width: 100%;
  top: 0;
  font-size: 3em;

  left: 0%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bolder;
  /* border: 5px solid black; */
}
nav h1 {
  transition: 0.4s;
  margin-left: 10%;
  cursor: pointer;
}
#MenuSvg {
  display: none;
}
nav a {
  text-decoration: none;
  color: white;
  background-color: transparent;
  cursor: pointer;
  width: 190px;
  text-align: center;
  border-radius: 20px;
  transition: 0.4s;
}
nav a:hover {
  background-color: #12bcff;
}
nav #Links {
  margin-left: auto;
  display: flex;
  gap: 50px;
  margin-right: 20px;
}
@media (max-width: 405px) {
  nav {
    font-size: 2em;
  }
}
@media (max-width: 1290px) {
  nav {
    font-size: 1.5em;
  }
}
@media (max-width: 1020px) {
  nav h1 {
    font-size: 1em;
    margin-left: 80px;
  }
}
@media (max-width: 900px) {

  .router-link-active {
    color: #004cff;
    font-weight: bolder;
  }
  nav {
    display: none;
  }
  #MenuSvg {
    display: flex;
    position: fixed;
    top: 10px;
    right: 20px;
    z-index: 7;
  }
  
  #sideBar #SideBarLinks a {
    text-decoration: none;
    color: white;
    font-weight: bolder;
    height: 50px;
    width: 90%;
    background-color: #12bcff;
    border-radius: 20px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
  #sideBar #SideBarLinks {
    /* background-color: red; */
    display: flex;
    flex-direction: column;
    gap: 40px;
    position: relative;
    top: 70px;
    width: 100%;
    right: 0;
    text-align: center;
    justify-content: center;
    align-items: center;
  }
}
</style>
