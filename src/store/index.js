import Vue from "vue";
import Vuex from "vuex";
import VueAxios from 'vue-axios'
import axios from 'axios'

Vue.use(VueAxios, axios)
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {}
});
