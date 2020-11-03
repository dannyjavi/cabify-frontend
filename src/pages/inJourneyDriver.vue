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
            <strong>Distancia:</strong> {{journey.travel_distance }} Km <br />
            <strong>Precio:</strong> {{ journey.journey_price }} €
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
        let result = await this.axios.get("http://localhost:3000/users/"+id, this.requestHeaders)
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
        let result = await this.axios.patch(
          "http://localhost:3000/journeys/"+id+"/arrivedConfirmation",{},this.requestHeaders
        );
        console.log(result.data)
        this.$buefy.toast.open({
          duration: 2500,
          message: `Viaje terminado correctamente!`,
          position: "is-top",
          type: "is-info",
        });
        this.$router.push('/journey-driver')
      } catch (e) {
        console.log("Error al cargar el viaje"+e);
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
