<template>
  <section class="section">
    <div class="container">
      <article class="message">
        <div class="message-header">
          
          <p  v-if="journey.pending === true && journey.end===false">{{ user.first_name }}, te estamos asignando un conductor</p>
          
          <p  v-if="journey.pending === false && journey.end===false">¡Listo!, {{driver.first_name}} está en camino.</p>
          <p  v-if="journey.pending === false && journey.end===true"> {{user.first_name}}, has llegado a tu destino </p>
        </div>
       
        <div
         v-if="journey.pending === true && journey.end===false "
          class="message-body has-text-centered is-size-2"
        >
          <span class="icon is-large has-text-success">
            <i class="fas fa-spinner fa-pulse"></i>
          </span>
        </div>

        <div
          v-if="journey.pending === false && journey.end===false"
          class="message-body"
        >
          <p class="is-size-5 subtitle">
            <strong>Punto de recogida:</strong> {{journey.start_point.name }} <br />
            <strong>Destino:</strong> {{ journey.destiny_point.name }}
            <br />
            <strong>Distancia:</strong> {{journey.travel_distance }} Km <br />
            <strong>Precio:</strong> {{ journey.journey_price }} € <br />
            <strong>Tipo de Vehículo:</strong> {{ journey.vehicle.type_vehicle }}  <br />
            <strong>Modelo:</strong> {{ journey.vehicle.vehicle_model }}  <br />
            <strong>Color:</strong> {{ journey.vehicle.color }}  <br />

          </p>
        </div>
         <div
         v-if="journey.pending === false && journey.end===true"
          class="message-body has-text-centered is-size-2"
        >
          <p class="is-size-5 subtitle">
            No olvides pagar.
          </p>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  name: "SearchPage",
  data() {
    return {
      user: "",
      driver:"",
      requestHeaders: "",
      journey: "",
    };
  },

  methods: {
    async loadDriverData() {
      let id = this.journey.driver.user;

      console.log("HOLA");
      try {
        let result = await this.axios.get("http://localhost:3000/users/" + id, this.requestHeaders);
        // console.log(result.data)
        this.driver = result.data
        console.log(this.driver)
      } catch (e) {
        console.log("Error al cargar los datos del conducor" + e);
      }
    },
     loadCurrentUserData() {
      let token = this.$store.state.token;
      this.user = this.$store.state.user;
      console.log(this.user, 'loadCurrentUser');
      this.requestHeaders = {
        headers: { Authorization: "Bearer " + token },
      };
      console.log(token);
      this.loadJourneys();
    },

    async loadJourneys() {
      try {
        let result = await this.axios.get(
          "http://localhost:3000/journeys/me",
          this.requestHeaders
        );

        console.log(result.data[0]);
        this.journey = result.data[0];
        if(this.journey.pending === false) this.loadDriverData()
        console.log(this.journey.driver)
        if(this.journey.end == true) clearInterval(this.intervalId)
      } catch (e) {
        console.log("Error al cargar viajes" + e);
      }
    },
  },
  created() {
    console.log("CREATED");
    this.loadCurrentUserData();    
  },
  mounted() {
    console.log("MOUNTED");
    this.loadJourneys();
    this.intervalId = setInterval(() => {
      this.loadJourneys()
      console.log("RECARGADO")
    }, 5000);
  },

  destroyed() {
    console.log("DESTROYED");
    clearInterval(this.intervalId);
  },
};
</script>


 

<style>
</style>