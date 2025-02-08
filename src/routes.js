import { createWebHistory, createRouter } from "vue-router";

import AboutRoute from "./routes/AboutRoute.route.vue";
import HomeRoute from "./routes/HomeRoute.route.vue";

const routes = [
  { path: "/", component: HomeRoute },
  { path: "/about", component: AboutRoute },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
