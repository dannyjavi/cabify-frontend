import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex);
Vue.use(VueAxios, axios)

export default new Vuex.Store({
  state: {
    vehicles: [],
    users: [],
    journeys: []
  },
  getters: {
    // readyDrivers(state) {
    //   return state.vehicles.filter(item => item.state == 1)
    // }
  },
  mutations: {
    setVehicles(state, payload) {
      state.vehicles = payload
    },
    setUsers(state, payload) {
      state.users = payload
    },
    setJourneys(state, payload) {
      state.journeys = payload
    },
  },
  actions: {
    async loadVehicles(context) {
      try {
        const url = 'http://localhost:3000/vehicles'
        const response = await Vue.axios.get(url)
        console.log(response.data)
        context.commit('setVehicles', response.data)
      } catch(err) {
        console.log(err)
      }
    },
    async loadUsers(context) {
      const response = await Vue.axios.get('http://localhost:3000/users')
      context.commit('setUsers', response.data)
    },
    async loadJourneys(context) {
      const response = await Vue.axios.get('http://localhost:3000/journeys')
      context.commit('setJourneys', response.data)
    }
  },
  modules: {}
});
