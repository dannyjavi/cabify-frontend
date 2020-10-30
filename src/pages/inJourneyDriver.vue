<template>
  <section class="section">
    <div class="container">
      <article class="message">
        <div class="message-header">
          <p>¡Hola {{driver.first_name}}!</p>
        </div>
        <div class="message-body">
          <p class="is-size-5 subtitle">
            <strong>Punto de recogida:</strong> {{journey.start_point.name }} <br />
            <strong>Destino:</strong> {{ journey.destiny_point.name }}
            <br />
            <strong>Distancia:</strong> {{endedJourney.travel_distance }}Km <br />
            <strong>Precio:</strong> {{ endedJourney.journey_price }}€
          </p>
        </div>
        <div class="p-3 container">
          <button @click="terminar" class="button is-dark is-fullwidth">Terminar Viaje</button>
        </div>
      </article>
    </div>
  </section>
</template>


<script>
export default {
  name: "inJourneyDriver",
  data() {
    return {
      endedJourney:{
          journey_price:"",
          travel_distance:"",
          points:"",
        },
      requestHeaders: "",
      journey: "",
      driver:""
    };
  },
  methods: {
    calculated(){
      this.endedJourney.journey_price = 15
      this.endedJourney.travel_distance = 25
      this.endedJourney.points = 80

    },
    async loadCurrentUserData() {
      let token = this.$store.state.token;

      this.requestHeaders = {
        headers: { Authorization: "Bearer " + token },
      };
      
    },
    async loadJourney() {
      try {
        let id = this.$store.state.currentJourneyId;

        let result = await this.axios.get(
          "http://localhost:3000/journeys/" + id,
          this.requestHeaders
        );
        this.journey = result.data;
        this.loadDriverData()
        this.calculated()
      } catch (e) {
        console.log("Error al cargar el viaje");
      }
    },
    async loadDriverData(){
      try{
        console.log("AQUI "+this.journey.driver.user)
        let id = this.journey.driver.user
        let result = await this.axios.get("http://localhost:3000/users/"+id)
        console.log("HOLA")
        console.log(result.data)
        this.driver = result.data
      }catch(e){
        console.log("Error al cargar nombre del Conductor")
      }
     
    },
    async terminar(){
      try {
        let id = this.$store.state.currentJourneyId;
        let endedJpurney={
          journey_price:this.endedJpurney.journey_price,      
          travel_distance:this.endedJpurney.travel_distance,      
          points:this.endedJpurney.points
        }
        let result = await this.axios.patch(
          "http://localhost:3000/journeys/"+id+"/arrivedConfirmation",endedJpurney,this.requestHeaders
        );
        this.journey = result.data;
        this.loadDriverData()
      } catch (e) {
        console.log("Error al cargar el viaje");
      }
    }
  },
  created() {
    this.loadCurrentUserData();
  },
  mounted() {
    this.loadJourney();
  },
};
</script>

<style>
</style>
