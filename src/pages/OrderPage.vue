<template>
  <div>
    <Navbar />
      <div class="container mt-5 is-fluid">
        <p class="title is-2 has-text-centered has-text-white">
          Viaja con
          <span class="is-italic">CoffeBy</span>
        </p>
        <p class="title is-2 mb-2 has-text-centered has-text-white">
          ¡Estamos a un click de tí!
        </p>
      </div>
      <Forms />
    
  </div>
</template>

<script>
import Forms from "../components/Forms";
import Navbar from "../components/Navbar";

export default {
  name: "OrderPage",
  components: {    
    Forms,
    Navbar
  },
};
</script>

<style>
/* 414px x 896
 */
</style>