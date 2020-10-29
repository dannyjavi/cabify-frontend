<template>
  <div>
    <div>
      <div class="container mt-6 is-fluid">
        <router-link to="/config"><i class="fas fa-cogs"></i></router-link>
        <p class="title is-2 has-text-centered has-text-white">
          Viaja con
          <span class="is-italic">CoffeBy</span>
        </p>
        <p class="title is-2 mb-5 has-text-centered has-text-white">
          ¡Estamos a un click de tí!
        </p>
      </div>
      <Forms />
    </div>
  </div>
</template>

<script>
import Forms from "../components/Forms";

export default {
  name: "OrderPage",
  components: {    
    Forms
  },
};
</script>

<style>
/* 414px x 896
 */
</style>