import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    // {
    //   path: "/sample",
    //   name: "sample",
    //   component: () => import("@/pages/Sample.vue"),
    // },
  ],
});

export default router;
