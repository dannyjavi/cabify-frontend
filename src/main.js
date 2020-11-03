import Vue from 'vue'
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Buefy from "buefy"
import 'buefy/dist/buefy.css'

Vue.config.productionTip = false;

Vue.use(Buefy)

Vue.filter('pasarFecha', (date)=>{
if(!date) return "En curso"
  let tiempo = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Intl.DateTimeFormat('en-US', tiempo).format(new Date(date))
})
Vue.filter("pasarDinero", (value)=>{
  return new Intl.NumberFormat("es-ES", {style: "currency", currency: "EUR"}).format(value)
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
