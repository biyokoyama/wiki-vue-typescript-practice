import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import IndexPage from "../views/index.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    component: IndexPage
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
