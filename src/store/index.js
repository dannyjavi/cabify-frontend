import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'
import VueAxios from 'vue-axios'
import jwtDecode from 'jwt-decode'

Vue.use(Vuex);
Vue.use(VueAxios, axios)

export default new Vuex.Store({
  state: {
    isAuth: false,
    user: null,
    token: null,
    currentJourneyId:null,
    vehicles: [],
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
    setJourneyId(state, payload) {
      state.currentJourneyId = payload
    },
    setToken(state, token){
      state.token = token
      state.isAuth = (token !== null)

      if(token !== null){
        state.user = jwtDecode(token)
      }
      localStorage.setItem('token', token)
    }
  },
  actions: {
    login(context, token = null){
      context.commit('setToken', token)
    },
    logout(context){
      context.commit('setToken', null)
    },
    isToken(context){
      let token = window.localStorage.getItem('token')
      if (token === 'null') {
        token = null
      }
      context.commit('setToken', token)
    },
    async loadVehicles(context) {
      try {
        const url = 'http://localhost:3000/vehicles'
        const response = await Vue.axios.get(url)
        context.commit('setVehicles', response.data)
      } catch(err) {
        throw new Error('no se pueden cargar los vehiculos')
      }
    },
    async loadUsers(context) {
      const response = await Vue.axios.get('http://localhost:3000/users')
      context.commit('setUsers', response.data)
    },
    login(context, token = null){
      context.commit('setToken', token)
    },
    loadJourneyId(context, id){
      context.commit('setJourneyId', id)
    }

  },
  modules: {}
});
