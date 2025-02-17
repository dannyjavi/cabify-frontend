import VueRouter from "vue-router";
import Vue from "vue";
import HomePage from "../pages/HomePage";
import SearchPage from "../pages/SearchPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import TermsPage from "../pages/TermsPage";
import ConfigPage from "../pages/ConfigPage";
import OrderPage from "../pages/OrderPage";
import ListMap from "../pages/ListMap";
import ProfilePage from "../pages/ProfilePage";
import driverJourney from "../pages/driverJourney"
import inJourneyDriver from "../pages/inJourneyDriver"
import ErrorPage from "../pages/Error/ErrorPage"
import History from "../pages/History"
import historyDriver from "../pages/historyDriver"

Vue.use(VueRouter);

const routes = [
  { path: "/", name: "Home", component: HomePage },
  { path: "/search", name: "Search", component: SearchPage },
  { path: "/login", name: "Login", component: LoginPage },
  { path: "/register", name: "Register", component: RegisterPage },
  { path: "/terms", name:"Terms", component: TermsPage },
  { path: "/config", name:"Config", component: ConfigPage },
  { path: "/order-page", name:"OrderPage", component: OrderPage },
  { path: "/profile", name:"ProfilePage", component: ProfilePage },
  { path: "/list", name:"List", component: ListMap },
  { path: "/journey-driver", name:"DriverJourney", component: driverJourney },
  { path: "/in-journey-driver", name:"inJourneyDriver", component: inJourneyDriver },
  { path: "/history", name:"history", component: History },
  { path: "/history-driver", name:"historyDriver", component: historyDriver },
  { path: "*", name:"Error", component: ErrorPage},
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
