<template>
  <div class="container mt-6">
    <div class="map">
      <Map />
    </div>
    <div>
      <header class="mt-4">¡Hola Persona!</header>
    </div>

    <div>
      <h1 class="mt-3">¿A dónde quieres ir?</h1>
    </div>
    <div class="field-label is-normal">
      <input
        class="input is-rounded"
        type="text"
        placeholder="Introduce un destino"
      />
    </div>

    <footer class="container mt-4">
      <div class="field">
        <p class="control has-text-centered">
          <a class="has-text-primary-light title is-4"
            >Don't have an account yet? Sign up here! Forgot Password?</a
          >
        </p>
        
      </div>
    </footer>
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
.mt-4 {
  font-size: 200%;
}


</style>