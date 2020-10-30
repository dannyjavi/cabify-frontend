<template>
  <div v-show="isOpen" class="notification is-danger is-light">
    <button @click="closeAlert" class="delete"></button>
    {{ mensaje }}
    <router-link to="/login">Iniciar sesión</router-link><br>
    <strong> O Si es primera vez</strong> que nos visitas
    <router-link to="/register">Regístrate aquí</router-link>
  </div>
</template>

<script>
export default {
  props: ["mensaje"],
  data() {
    return {
    };
  },
  methods: {
    closeAlert() {
      this.$emit('closeAlert')
    }
  }
};
</script>

<style>
</style>