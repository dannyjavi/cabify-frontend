<template>
  <div class="body">
    <Card
      v-for="(item, index) in journeys"
      :key="index"
      :num="index"
      :item="item"
      @click="aceptar"
    />
    <!-- <Map /> -->

    <section v-if="(journeys.length===0)" class="section">
      <div class="container">
        <div class="columns is-multiline">
          <div class="column is-one-third">
            <article class="notification media has-background-white">
              <figure class="media-left">
                <span class="icon has-text-danger">
                  <i class="fa fa-lg fa-car"></i>
                </span>
              </figure>
              <div class="media-content">
                <div class="content">
                  <h1 class="title is-size-4">No hay viajes pendientes</h1>
                  
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
import Card from "../components/journeyCard";
import Map from "../components/Map"
export default {
  name: "DriverJourney",
  data() {
    return {
      precio_km:"",
      intervalId: "",
      journeys: [],
      requestHeaders: ""
    };
  },
  components: {
    Card, Map
  },
  created(){
    this.loadCurrentUserData()
  },
  methods: {
    async loadDriverData(){
     let id = this.$store.state.user.id
     
     try{
      let result = await this.axios.get("https://grupo3-backend-coffeby.herokuapp.com/users/"+id , this.requestHeaders)
      this.price_km = result.data.driver.price_km
     }catch(e){
       throw new Error("Error al cargar los datos del conductor")
     }
    },
    loadCurrentUserData() {
      let token = this.$store.state.token;
      this.requestHeaders = {
        headers: { Authorization: "Bearer " + token }
      };
         this.loadDriverData()
    },
    async loadJourneys() {
      try {
        let result = await this.axios.get("https://grupo3-backend-coffeby.herokuapp.com/journeys",this.requestHeaders);
        this.journeys = result.data;

      } catch (e) {
        throw new Error("Error al cargar viajes");
      }
    },

    async aceptar(id) {
      let viaje = await this.axios.get("https://grupo3-backend-coffeby.herokuapp.com/journeys/" + id, this.requestHeaders);
      let lat1 =viaje.data.start_point.lat
      let long1=viaje.data.start_point.long
      let lat2=viaje.data.destiny_point.lat
      let long2=viaje.data.destiny_point.long
      let distance = getKilometros(lat1,long1,lat2,long2)
      let journeyPrice = this.price_km*distance

      try {

        let result = await this.axios.patch(
          "https://grupo3-backend-coffeby.herokuapp.com/journeys/" + id,
          {travel_distance:distance, journey_price:journeyPrice },
          this.requestHeaders
        );
        if(result.status === 200){
          this.$store.dispatch('notificacion','Viaje aceptado, un cafelito en camino')
          this.$store.dispatch('isPending', false)
        }
        this.$store.dispatch("loadJourneyId", id);
        this.$router.push("/in-journey-driver");
      } catch (e) {
        throw new Error("Error al aceptar el viaje");
      }
    }
  },
  mounted() {
    this.loadJourneys();
    
    this.intervalId = setInterval(() => {
      this.loadJourneys()
      console.log("Recargando ....")
    }, 5000);
  },
  destroyed() {
    clearInterval(this.intervalId);
  }
};
function getKilometros(lat1,lon1,lat2,lon2){
  let rad = function(x) {return x*Math.PI/180;}
  let R = 6378.137; //Radio de la tierra en km
  let dLat = rad( lat2 - lat1 );
  let dLong = rad( lon2 - lon1 );
  let a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(rad(lat1)) * Math.cos(rad(lat2)) * Math.sin(dLong/2) * Math.sin(dLong/2);
  let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  let d = R * c;
  return d.toFixed(3); //Retorna tres decimales
}
</script>
