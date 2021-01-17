import { createRouter, createWebHistory } from "vue-router";
import Store from "../store/";
import Home from "../views/Home.vue";
// import Login from "../components/layout/TheLogin.vue";
import Login from "../views/Login.vue";
import Products from "../components/layout/products/ProLayout.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/products",
    name: "Products",
    component: Products,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.name !== "Login" && !Store.getters.isAuthenticated) next({ name: "Login" });
  else if (to.name === "Login" && Store.getters.isAuthenticated) next('/');
  else next();
});

export default router;
