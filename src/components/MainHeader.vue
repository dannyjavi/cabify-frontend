<template>
  <div>
    <div class="container mt-6 is-fluid">
      <p class="title is-2 has-text-centered has-text-white">
        Viaja con
        <span class="is-italic">CoffeBy</span>
      </p>
      <p class="title is-2 has-text-centered has-text-white">¡Estamos a un click de tí!</p>
    </div>
    <Forms />
  </div>
</template>

<script>
import Forms from "./Forms"

export default {
  name: "HeaderPage",
  components: {
    Forms
  }
};
</script>

<style>
</style>