<template>
  
    <nav class="panel">
      <p class="panel-heading">Mi perfil</p>

      <a class="panel-block is-active">
        <span class="panel-icon">
          <i class="fas fa-car-side" aria-hidden="true"></i>
        </span>
        Mis viajes
      </a>
      <a class="panel-block is-active">
        <span class="panel-icon">
          <i class="fas fa-plus" aria-hidden="true"></i>
        </span>
        Mis puntos
      </a>
      <a class="panel-block is-active">
        <span class="panel-icon">
          <i class="fas fa-table" aria-hidden="true"></i>
        </span>
        Mis datos
      </a>
      <router-link to="/config" class="panel-block is-active">
        <span class="panel-icon">
          <i class="fas fa-user-tie" aria-hidden="true"></i>
        </span>
        Convertirme en conductor
      </router-link>
    </nav>
  
</template>

<script>
export default {
  name: "ProfilePage",
};
</script>


<style>
</style>