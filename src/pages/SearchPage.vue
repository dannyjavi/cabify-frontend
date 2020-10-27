<template>
  <div class="card">
    <div class="card-image">
      <Map />
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          
        </div>
        <div class="media-content">
          <p class="title is-4">¡Hola Persona!</p>
          <p>¿A dónde quieres ir?</p>
        </div>
      </div>

      <div class="content">
        <input class="input is-rounded has-background-light" type="text" placeholder="Introduce tu destino">
      </div>
    </div>
  </div>
</template>

<script>
import Map from "../components/Map";
export default {
  name: "SearchPage",
  components: { Map },
};
</script>

<style>
.card {
  height: 100vh;
}
</style>