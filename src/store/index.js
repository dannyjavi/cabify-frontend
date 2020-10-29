import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex);
Vue.use(VueAxios, axios)

export default new Vuex.Store({
  state: {
    
    vehicles: [],
    //users: [],
    //journeys: [],
    travel:{
      origen: null,
      destino: null
    }
  },
  getters: {
    alldriversAvailable(state) {
      return state.vehicles
   }
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
    setTravel(state, payload) {
      state.travel = payload
    },
  },
  actions: {
    async loadVehicles(context) {
      try {
        const url = 'http://localhost:3000/vehicles'
        const response = await Vue.axios.get(url)
        console.log('actionsdel store');
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
      //const response = await Vue.axios.get('http://localhost:3000/journeys')
      //context.commit('setJourneys', response.data)
    },
    loadTravel(context, form){
      context.commit('setTravel',form)
      console.log(form);
    }
  },
  modules: {}
});
