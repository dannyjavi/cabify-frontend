import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../pages/HomePage";
import SearchPage from "../pages/SearchPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import TermsPage from "../pages/TermsPage";
import ConfigPage from "../pages/ConfigPage"
import OrderPage from "../pages/OrderPage"
import ListMap from "../pages/ListMap"
import Admin from "../pages/admin/AdminPage"

Vue.use(VueRouter);

const routes = [
  { path: "/", name: "Home", component: HomePage },
  { path: "/search", name: "Search", component: SearchPage },
  { path: "/login", name: "Login", component: LoginPage },
  { path: "/register", name: "Register", component: RegisterPage },
  { path: "/terms", name:"Terms", component: TermsPage },
  { path: "/config", name:"Config", component: ConfigPage },
  { path: "/order-page", name:"OrderPage", component: OrderPage },
  { path: "/list", name:"List", component: ListMap },
  { path: "/dashboard", name:"Dashboard", component: Admin},
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
