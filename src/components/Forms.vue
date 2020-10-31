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
                  <button @click="passDataTravel(form)" class="button is-dark title is-5" :disabled="setDisable">Pide ahora</button>
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
    Map
   },
  data() {
    return {
      isDisable: true,
      form: {
        origen:"",
        destino:""
      },
      vehicles: []
    };
  },
  computed:{
    setDisable(){
      return (this.form.origen !== '' && this.form.destino !== '') ? false : true
    }
  }
  ,
  // async mounted() {
  //   await this.$store.dispatch("loadVehicles");
  //   this.vehicles = this.$store.getters.alldriversAvailable;
  //   let mymap = L.map("mapid").setView([36.72, -4.42], 13);
  //   mymap.locate({ enableHighAccuracy: true });
  //   // mymap.locate({ setView: true });
  //   let tileURL =
  //     "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw";
  //   L.tileLayer(tileURL, {
  //     minZoom: 10,
  //     maxZoom: 20,
  //     id: "mapbox/streets-v11",
  //     tileSize: 512,
  //     zoomOffset: -1
  //   }).addTo(mymap);
  //   this.vehicles.forEach(item => {
  //     let marker = L.marker(item.position.coordinates)
  //       .bindPopup("Hi there!")
  //       .addTo(mymap);
  //   });
  // },
  methods: {
    passDataTravel() {
      this.searchPos();
    },
    async searchPos() {
      /* if (this.$store.state.isAuth === false) {
        alert('Debes estar logueado para continuar')
        this.$router.push('/login')
        return
      } */
      try {
        let url_origen =
          "http://api.openweathermap.org/data/2.5/weather?q=" +
          this.form.origen +
          "&appid=3408896f1d019f9845f9f0726d4dab41&units=metric&lang=es";

        let url_destino =
          "http://api.openweathermap.org/data/2.5/weather?q=" +
          this.form.destino +
          "&appid=3408896f1d019f9845f9f0726d4dab41&units=metric&lang=es";

        const [coord_origen, coord_destino] = await Promise.all([
          this.axios.get(url_origen),
          this.axios.get(url_destino)
        ]);
        
        const obj_travel = {
          start_point: {
            lat: coord_origen.data.coord.lat,
            long: coord_origen.data.coord.lon,
            name: this.form.origen
          },
          destiny_point: {
            lat: coord_destino.data.coord.lat,
            long: coord_destino.data.coord.lon,
            name: this.form.destino
          },
          user: this.$store.state.user.id
        };

        let token = this.$store.state.token

        const header_axios = {
          headers:{
            Authorization: `Bearer ${token}`
          }
        }
        if (obj_travel.start_point === undefined | obj_travel.destiny_point === undefined) {
          alert("tu ciudad no existe");
        }

        const res = await this.axios.post("http://localhost:3000/journeys", obj_travel,header_axios);
        console.log(res);
        this.$router.push('/search')
      } catch (err) {
        let msg = 'No sabemos quien eres.'
        this.$emit('showError',msg)
      }
    },
    async loadJourneys(context) {
      //const response = await Vue.axios.get('http://localhost:3000/journeys')
      //context.commit('setJourneys', response.data)
    }
  }
};
</script>

<style scoped>
#mapid {
  height: 60vh;
  width: 50vh;
}
</style>
