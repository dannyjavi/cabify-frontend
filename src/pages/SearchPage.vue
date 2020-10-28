<template>
  <div class="card">
    <div class="card-image">
      <div class="mt-5 ml-5">
        <button v-for="(item, index) in vehicles" :key="index" id="driver" class="button is-fullwidth has-text-left columns mb-3">
          <div class="column">
            JORGE <br> te recogerá en 5 minutos
          </div>
          <div class="column has-text-right">
            6,60€
          </div>           
        </button>      
      </div>
      <!-- <Map :position="location" /> -->
    </div>
    <div class="card-content">
      <div class="media">        
        <div class="media-content">
          <p class="title is-4">¡Hola Persona!</p>
          <p>¿A dónde quieres ir?</p>
        </div>
      </div>
    </div>
    <div class="content columns">
      <div class="field has-addons column ml-5">
        <div class="control">
          <input
            v-model="city"
            class="input is-rounded has-background-light is-normal"
            type="text"
            placeholder="Introduce tu destino"
          />
        </div>
        <div class="control">
          <a @click="searchDrivers" class="button is-info is-rounded is-normal">
            Búsqueda
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Map from "../components/Map";
export default {
  name: "SearchPage",
  data() {
    return {
      city: "",
      location: [],
    };
  },
  computed: {
    vehicles() {
      return this.$store.state.vehicles
    }
  },
  methods: {
    async searchPos() {
      try {
        let url =
          (await "http://api.openweathermap.org/data/2.5/weather?q=") +
          this.city +
          "&appid=3408896f1d019f9845f9f0726d4dab41&units=metric&lang=es";
        let response = await this.axios.get(url);
        let lat = response.data.coord.lat;
        let lon = response.data.coord.lon;
        this.location = [lat, lon];
        console.log(this.location);
      } catch (err) {
        console.log(err);
      }
    },
    searchDrivers() {
      this.$store.dispatch('loadVehicles')
    }
  },
  components: { Map },
};
</script>

<style>
.card {
  height: 100vh;
}
.card-image {
  height: 50vh;
}
#driver {
  height: 80px;
}
</style>