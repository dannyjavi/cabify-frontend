<template>
  <div class="notification is-danger is-light m-3 mt-5">
    <button @click="closeAlert" class="delete"></button>
    {{ mensaje }}
    <router-link to="/login">Puedes iniciar sesión desde aquí. </router-link>
    <strong>Si es primera vez</strong> que nos visitas
    <router-link to="/register">regístrate aquí.</router-link>
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