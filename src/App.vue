<script setup>
import MenuSvg from "../src/components/icons/Menu.vue";
let isSideBarOpen = false;
import { onMounted } from "vue";
import { RouterLink, RouterView } from "vue-router";
import { gsap } from "gsap";

onMounted(() => {
  const menuSvg = document.getElementById("MenuSvg");
  const sideBar = document.getElementById("sideBar");
  menuSvg.addEventListener("click", () => {
    if (isSideBarOpen) {
      gsap.to("#sideBar", {
        right: "-90%",
        duration: 1,
        onComplete: () => (sideBar.style.display = "none"),
      });
      // sideBar.style.display = "none";
      isSideBarOpen = false;
    } else {
      gsap.to("#sideBar", {
        right: "0",
        duration: 1,
        onComplete: () => (sideBar.style.display = "flex"),
      });
      isSideBarOpen = true;
    }
  });
});
</script>

<template>
  <MenuSvg id="MenuSvg"></MenuSvg>
  <div id="sideBar">
    <div id="SideBarLinks">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </div>
  </div>
  <header>
    <nav>
      <h1>FoodIA AY</h1>
      <div id="Links">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </div>
    </nav>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style scoped>
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
#sideBar #SideBarLinks {
  display: none;
}
#sideBar {
  overflow: hidden;
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
  #sideBar {
    height: 100%;
    width: 90%;
    background-color: rgba(13, 0, 59, 0.5);
    position: absolute;
    right: -90%;
    display: none;
    z-index: 6;
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
