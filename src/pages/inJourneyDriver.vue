<template>
  <section v-if="journey !==''" class="section">
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
            <strong>Precio:</strong> {{ journey.journey_price | pasarDinero }} 
          </p>
        </div>
        <div class="p-3 container">
          <button @click="terminar" class="button is-dark is-fullwidth">Terminar Viaje</button>
        </div>
      </article>
    </div>

    <div
          v-if="journey === '' "
          class="message-body has-text-centered is-size-2"
        >
          <span class="icon is-large has-text-success">
            <i class="fas fa-spinner fa-pulse"></i>
          </span>
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
      let token = await this.$store.state.token;

      this.requestHeaders = {
        headers: { Authorization: "Bearer " + token },
      };
      
    },
    async loadJourney() {
      try {
        let id = await this.$store.state.currentJourneyId;
        console.log('id linea 54: ', id);
        let result = await this.axios.get(
          "https://grupo3-backend-coffeby.herokuapp.com/journeys/" + id,
          this.requestHeaders
        );
        this.journey = result.data;
        this.loadDriverData()
        this.calculated()
      } catch (e) {
        throw new Error("Error al cargar el viaje");
      }
    },
    async loadDriverData(){
      try{
        let id = this.journey.driver.user
        let result = await this.axios.get("https://grupo3-backend-coffeby.herokuapp.com/users/"+id, this.requestHeaders)
        this.driver = result.data
      }catch(e){
        throw new Error("Error al cargar nombre del Conductor")
      }
     
    },
    async terminar(){
      try {
        let id = await this.$store.state.currentJourneyId;
        let result = await this.axios.patch(
          "https://grupo3-backend-coffeby.herokuapp.com/journeys/"+id+"/arrivedConfirmation",{},this.requestHeaders
        );
        this.$buefy.toast.open({
          duration: 2500,
          message: `Viaje terminado correctamente!`,
          position: "is-top",
          type: "is-info",
        });

        if(result.status === 200){
          this.$store.dispatch('isFinish', true)
        }
        this.$router.push('/journey-driver')
      } catch (e) {
        throw new Error("Error al cargar el viaje");
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