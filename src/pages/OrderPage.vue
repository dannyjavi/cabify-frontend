<template>
  <div>
    <div class="container mt-5 is-fluid">
      <p class="title is-2 has-text-centered has-text-white">
        Viaja con
        <span class="is-italic">CoffeBy</span>
      </p>
      <p class="title is-2 mb-2 has-text-centered has-text-white">
        ¡Estamos a un click de tí!
      </p>
    </div>
    <Notification @closeAlert="closeAlert" :mensaje="mensaje" v-show='isActive'/>
    <Forms  @showError="showNotification"/>
  </div>
</template>

<script>
import Forms from "../components/Forms";
import Notification from '../components/Notification'

export default {
  name: "OrderPage",
  components: {
    Forms,
    Notification,
  },
  data(){
    return {
      isActive: false,
      mensaje: null
    }
  }
  ,
  methods:{
    showNotification(error){
      this.isActive = true
      this.mensaje = error
    },
    closeAlert(){
      this.isActive = false
    }
  }
};
</script>

<style>
/* 414px x 896
 */
</style>