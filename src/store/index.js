import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'
import VueAxios from 'vue-axios'
import jwtDecode from 'jwt-decode'

axios.defaults.baseURL = 'https://localhost:3000/';

Vue.use(Vuex);
Vue.use(VueAxios, axios)

export default new Vuex.Store({
  state: {
    isAuth: false,
    loader: false,
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
    setLoader(state,payload){
      state.loader = payload
    },
    setVehicles(state, payload) {
      state.vehicles = payload
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
      state.user = null

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
    updateProfile(context, token){
      context.commit('setToken', token )
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
        const url = 'http://192.168.0.106:3000/vehicles'
        const response = await Vue.axios.get(url)
        context.commit('setVehicles', response.data)
      } catch(err) {
        throw new Error('no se pueden cargar los vehiculos')
      }
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
