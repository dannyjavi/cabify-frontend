<template>
  <div>
    <div class="tabs is-boxed mb-0" id="tabs">
      <ul class="columns is-gapless">
        <li
          @click="selectDrivers" :class="driverClass[0]"
        >
          <a :class="driverClass[1]">
            <span class="icon is-medium"
              ><i class="fas fa-user-tie" aria-hidden="true"></i
            ></span>
            <span class="py-2">Conductores</span>
          </a>
        </li>
        <li
          @click="selectMap" :class="mapClass[0]"
        >
          <a :class="mapClass[1]">
            <span class="icon is-medium"
              ><i class="fas fa-map" aria-hidden="true"></i
            ></span>
            <span class="py-2">Mapa</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="container">
      <List v-show="driversSelected" />
    </div>
    <Map :vehicles="drivers" v-show="mapSelected" />
    <div id="space"></div>
  </div>
</template>

<script>
import List from "../components/List"
import Map from "../components/Map";
export default {
  name: "ListMap",
  components: { Map, List },
  data() {
    return {
      driversSelected: false,
      driverClass: ['is-active column', 'has-background-dark has-text-white is-size-4'],
      mapSelected: true,
      mapClass: ['column', 'has-background-white has-text-black is-size-4']
    };
  },
  methods: {
    selectDrivers() {
      this.driversSelected = true
      this.mapSelected = false
      this.driverClass = ['is-active column', 'has-background-white has-text-black is-size-4']
      this.mapClass = ['column', 'has-background-dark has-text-white is-size-4']
    },
    selectMap() {
      this.mapSelected = true
      this.driversSelected = false
      this.mapClass = ['is-active column', 'has-background-white has-text-black is-size-4']
      this.driverClass = ['column', 'has-background-dark has-text-white is-size-4']
    },
    
  },
  computed:{
    drivers() {
      // this.$store.state.vehicles -> otra opción
      return this.$store.getters.alldriversAvailable
    }
  },
};
</script>

<style>
#tab-content p {
  display: none;
}

#tab-content p.is-active {
  display: block;
}

#space {
  height: 280px;
}
</style>
