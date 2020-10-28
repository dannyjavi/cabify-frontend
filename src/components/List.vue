<template>
  <div class="mt-5">
    <button 
    v-for="(vehicle,index) in drivers" :key="index"
    id="driver" class="button is-fullwidth has-text-left columns mb-4">
      <div class="column">
        {{ vehicle}} <br />
        te recogerá en 5 minutos
      </div>
      <div class="column has-text-right">6,60€</div>
    </button>
    
  </div>
</template>

<script>
export default {
  name: "List",
  computed:{
    drivers(){
      console.log(this.$store);
      //return this.$store.vehicles
    }
  },
  methods:{

  }
};
</script>

<style>
</style>