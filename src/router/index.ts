import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Index from "../views/index.vue";
import Search from "../views/search.vue";
import ArticlesId from "../views/articles/_id.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    component: Index
  },
  {
    path: "/search",
    component: Search
  },
  {
    path: "/articles/:id",
    component: ArticlesId
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
