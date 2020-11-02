<template>
<<<<<<< HEAD
  <div>
    <nav class="panel">
      <p class="panel-heading">Mi perfil</p>
      <router-link v-if="!isDriver" to="/config" class="panel-block is-active">
        <span class="panel-icon">
          <i class="fas fa-user-tie" aria-hidden="true"></i>
        </span>
        Convertirme en conductor
      </router-link>
      <a class="panel-block is-active">
        <span class="panel-icon">
          <i class="fas fa-car-side" aria-hidden="true"></i>
        </span>
        Mis viajes
      </a>
      <a class="panel-block is-active">
        <span class="panel-icon">
          <i class="fas fa-plus" aria-hidden="true"></i>
        </span>
        Mis puntos
      </a>
      <a class="panel-block is-active">
        <span class="panel-icon">
          <i class="fas fa-table" aria-hidden="true"></i>
        </span>
        Mis datos
      </a>
    </nav>
  </div>
=======
  <section class="section">
    <div class="container">
      <article class="message">
        <div class="message-header">
          <p>Mis Datos</p>
        </div>
        <div class="message-body">
         
            <ul >
            <li class="is-size-5 subtitle">{{ userData.first_name}} 
            {{userData.last_name}}</li>
            <li><strong>Tlf: </strong>{{userData.phone}}</li>
            <li><strong>Email: </strong>{{userData.email}}</li>

          </ul>
        </div>
      </article>

      <article v-if="journey.length > 0" class="message">
        <div class="message-header">
          <p>Mis Viajes</p>
        </div>
        <div v-for="(item, index) in journey" :key="index" class="message-body">
          <ul >
            <li><strong>Origen:</strong> {{item.start_point.name }}</li>
            <li><strong>Destino:</strong> {{ item.destiny_point.name }}</li>
            <li><strong>Precio:</strong> {{ item.journey_price }}</li>
            <li><strong>Distancia:</strong> {{ item.travel_distance }}</li>
          </ul>

        </div>
      </article>
    </div>
  </section>
>>>>>>> 53b70d45c8f5b2cbae753e579e672abb55719c3f
</template>

<script>
export default {
  data() {
<<<<<<< HEAD
      return {
          driver: "",
      }
  },
  computed: {
    isDriver() {
      return this.$store.state.user.profiles.includes("driver");
    },
  },
};
</script>
=======
    return {
      journey: "",
      requestHeaders: "",
      userId: "",
      userData: "",
    };
  },
  methods: {
    async user() {
      this.userId = this.$store.state.user.id;
>>>>>>> 53b70d45c8f5b2cbae753e579e672abb55719c3f

      try {
        const result = await this.axios.get(
          "http://localhost:3000/users/" + this.userId
        );
        console.log(result.data);
        this.userData = result.data;
      } catch (e) {
        console.log("Error al cargar datos de Usuario");
      }
    },
    async loadJouerneyData() {
      try {
        const result = await this.axios.get(
          "http://localhost:3000/journeys/me",
          this.requestHeaders
        );

        this.journey = result.data;
        console.log(this.journey);
      } catch (e) {
        console.log("Error al cargar los datos del Viaje");
      }
    },
    loadCurrentUserData() {
      let token = this.$store.state.token;
      // userId = this.$store.user.id
      console.log(token);
      this.requestHeaders = {
        headers: { Authorization: "Bearer " + token },
      };
      this.loadJouerneyData();
      this.user();
    },
  },
  created() {
    this.loadCurrentUserData();
  },
  mounted() {
    this.user();
  },
};
</script>