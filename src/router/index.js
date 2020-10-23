import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage
  },
  {
    path: "/login",
    name: "Login",
    component: LoginPage
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
