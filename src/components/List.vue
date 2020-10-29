<template>
  <div class="mt-5">
    <button 
    v-for="(vehicle,index) in drivers" :key="index"
    id="driver" class="button is-fullwidth has-text-left columns mb-4">
      <div class="column">
        {{ vehicle.position.coordinates }} <br />
        te recogerá en 5 minutos
      </div>
      <div class="column has-text-right">{{ vehicle.precio }}</div>
    </button>
    
  </div>
</template>

<script>
export default {
  name: "List",
  computed:{
    drivers() {   
      return this.$store.getters.alldriversAvailable
    }
  },
  methods:{

  }
};
</script>

<style>
</style>