<template>
  <section class="section">
    <div class="container">
      <article class="message">
        <div class="message-header">
          <p
            v-if="journey.pending === true && journey.end===false"
          >{{ user.first_name }}, te estamos asignando un conductor</p>

          <p
            v-if="journey.pending === false && journey.end===false"
          >¡Listo!, {{driver.first_name}} está en camino.</p>
          <p
            v-if="journey.pending === false && journey.end===true"
          >{{user.first_name}}, has llegado a tu destino</p>
        </div>

        <div
          v-if="journey.pending === true && journey.end===false "
          class="message-body has-text-centered is-size-2"
        >
          <span class="icon is-large has-text-success">
            <i class="fas fa-spinner fa-pulse"></i>
          </span>
        </div>

        <div v-if="journey.pending === false && journey.end===false" class="message-body">
          <p class="is-size-5 subtitle">
            <strong>Punto de recogida:</strong>
            {{journey.start_point.name }}
            <br />
            <strong>Destino:</strong>
            {{ journey.destiny_point.name }}
            <br />
            <strong>Distancia:</strong>
            {{journey.travel_distance }} Km
            <br />
            <strong>Precio:</strong>
            {{ journey.journey_price | pasarDinero }}
            <br />
            <strong>Tipo de Vehículo:</strong>
            {{ journey.vehicle.type_vehicle }}
            <br />
            <strong>Modelo:</strong>
            {{ journey.vehicle.vehicle_model }}
            <br />
            <strong>Color:</strong>
            {{ journey.vehicle.color }}
            <br />
            <strong>Matricula:</strong>
            {{ journey.vehicle.enrolment }}
            <br />
          </p>
        </div>
        <div
          v-if="journey.pending === false && journey.end===true"
          class="message-body has-text-centered is-size-2"
        >
          <p class="is-size-5 subtitle">No olvides pagar.</p>
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
      driver: "",
      requestHeaders: "",
      journey: ""
    };
  },
  computed: {},
  methods: {
    async loadDriverData() {
      let id = this.journey.driver.user;
      let token = this.$store.state.token;
      this.requestHeaders = {
        headers: { Authorization: "Bearer " + token }
      };
      try {
        let result = await this.axios.get(
          "https://grupo3-backend-coffeby.herokuapp.com/users/" + id,
          this.requestHeaders
        );
        this.driver = result.data;
      } catch (e) {
        throw new Error("Error al cargar los datos del conducor");
      }
    },
    loadCurrentUserData() {
      let token = this.$store.state.token;
      this.user = this.$store.state.user;
      this.requestHeaders = {
        headers: { Authorization: "Bearer " + token }
      };
      this.loadJourneys();
    },

    async loadJourneys() {
      let token = this.$store.state.token;
      this.requestHeaders = {
        headers: { Authorization: "Bearer " + token }
      };
      try {
        let result = await this.axios.get(
          "https://grupo3-backend-coffeby.herokuapp.com/journeys/me",
          this.requestHeaders
        );

        this.journey = result.data[0];
        if (this.journey.hasOwnProperty("pending")) {
          if (this.journey.pending === false) {
                      this.$store.dispatch("isPending", false);

            this.loadDriverData();
          }
        }
        if (this.journey.end == true) {
          this.$store.dispatch("isPending", false);
          this.$store.dispatch("isFinish", true);
          clearInterval(this.intervalId);
        }
      } catch (e) {
        throw new Error("Error al cargar viajes");
      }
    }
  },
  created() {
    this.loadCurrentUserData();
  },
  mounted() {
    this.loadJourneys();
    
    this.intervalId = setInterval(() => {
      this.loadJourneys();
      console.log("Recargando ....");
    }, 4000);
  },

  destroyed() {}
};
</script>


 

<style>
</style>