<template>
  <div>
    <div class="columns">
      <div class="column is2">
        <div class="card bg-green-figma">
          <div class="card-content">
            <div class="content">
              <div class="field">
                <p class="control has-icons-left has-icons-right">
                  <input
                    v-model="form.origen"
                    class="input is-medium"
                    type="text"
                    placeholder="Ubicación"
                  />
                  <span class="icon is-small is-left">
                    <i class="fas fa-map-marker-alt"></i>
                  </span>
                </p>
              </div>
              <div class="field">
                <p class="control has-icons-left">
                  <input
                    v-model="form.destino"
                    class="input is-medium"
                    type="text"
                    placeholder="Destino"
                  />
                  <span class="icon is-small is-left">
                    <i class="fas fa-search"></i>
                  </span>
                </p>
              </div>
              <div class="field is-grouped is-grouped-centered">
                <p class="control">
                  <!-- <router-link to="/list"> -->
                  <button
                    @click="passDataTravel(form)"
                    class="button is-dark title is-5 mt-2"
                  >
                    Pide ahora
                  </button>
                  <!-- </router-link> -->
                </p>
              </div>
            </div>
          </div>
          <div class="card-image">
            <figure class="image">
              <div id="mapid"></div>
              <!-- <Map /> -->
            </figure>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Map from "./Map";

export default {
  name: "FormComponent",
  components: {
    Map,
  },
  data() {
    return {
      form: {
        origen: "",
        destino: "",
        location: [],
      },
      vehicles: [],
    };
  },
  async mounted() {
    await this.$store.dispatch("loadVehicles");
    this.vehicles = this.$store.getters.alldriversAvailable;
    let mymap = L.map("mapid").setView([36.72, -4.42], 13);
    mymap.locate({ enableHighAccuracy: true });
    // mymap.locate({ setView: true });
    let tileURL =
      "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw";
    L.tileLayer(tileURL, {
      minZoom: 10,
      maxZoom: 20,
      id: "mapbox/streets-v11",
      tileSize: 512,
      zoomOffset: -1,
    }).addTo(mymap);
    this.vehicles.forEach((item) => {
      let marker = L.marker(item.position.coordinates)
        .bindPopup('Hi there!')
        .addTo(mymap);
    });
  },
  methods: {
    passDataTravel() {
      this.$store.dispatch("loadTravel", this.form);
      this.searchPos();
    },
    async searchPos() {
      try {
        let url_origen = (await "http://api.openweathermap.org/data/2.5/weather?q=") +
          this.form.origen +
          "&appid=3408896f1d019f9845f9f0726d4dab41&units=metric&lang=es";
          
        let url_destino = (await "http://api.openweathermap.org/data/2.5/weather?q=") +
          this.form.destino +
          "&appid=3408896f1d019f9845f9f0726d4dab41&units=metric&lang=es";

        const [coord_origen,coord_destino] = await Promise.all([
              this.axios.get(url_origen),
              this.axios.get(url_destino)
              ])

        const obj_travel = {
          // terminar de completar...
          long: coord_origen,
         lat: coord_destino,
         //datos del viaje.
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style scoped>
#mapid {
  height: 60vh;
  width: 50vh;
}
</style>
