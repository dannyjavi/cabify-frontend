<template>
  <section class="section">
    <div class="container">
      <article class="message">
        <div class="message-header">
          <p>Mis Datos</p>
        </div>

        <div class="container p-4">
          <section>
            <b-field label="First name">
              <b-input v-model="edit.first_name"></b-input>
            </b-field>
            <b-field label="Last name">
              <b-input v-model="edit.last_name"></b-input>
            </b-field>
            <b-field label="Phone number">
              <b-input v-model="edit.phone"></b-input>
            </b-field>
            <b-field label="email">
              <b-input v-model="edit.email"></b-input>
            </b-field>
            <b-field horizontal>
              <!-- Label left empty for spacing -->
              <p class="control">
                <button class="button is-primary" @click="editProfile(edit)">Update profile!</button>
              </p>
            </b-field>
          </section>
        </div>
      </article>

      <article v-if="journey.length > 0" class="message">
        <div class="message-header">
          <p>Mis Viajes</p>
        </div>
        <div v-for="(item, index) in journey" :key="index" class="message-body">
          <ul>
            <li>
              <strong>Origen:</strong>
              {{item.start_point.name }}
            </li>
            <li>
              <strong>Destino:</strong>
              {{ item.destiny_point.name }}
            </li>
            <li>
              <strong>Precio:</strong>
              {{ item.journey_price }}
            </li>
            <li>
              <strong>Distancia:</strong>
              {{ item.travel_distance }}
            </li>
          </ul>
        </div>
      </article>
    </div>
  </section>
</template>

<script>

export default {
  name: "ProfilePage",
  components: {
  },
  data() {
    return {
      journey: "",
      requestHeaders: "",
      userId: "",
      userData: "",
      edit: {
        first_name: null,
        last_name: null,
        phone: null,
        email: null
      }
    };
  },
  methods: {
    async editProfile(formObject){
      this.userId = this.$store.state.user.id;
      console.log(this.userId);
      console.log('enviando datos...');
      try {
        console.log(formObject);
        const send = await this.axios.put("http://192.168.0.106:3000/users/" + this.userId+'/update',formObject)
        console.log(send);
        if (send.statusCode === 200) {
          this.loadCurrentUserData()
        }
      } catch (e) {
        console.log('corrige esto: ',e.message);
      }
    },
    async user() {
      this.userId = this.$store.state.user.id;

      try {
        const result = await this.axios.get("http://192.168.0.106:3000/users/" + this.userId
        );
        console.log(result.data);
        this.edit = result.data;
        this.userData = result.data;
      } catch (e) {
        console.log("Error al cargar datos de Usuario");
      }
    },
    async loadJouerneyData() {
      try {
        const result = await this.axios.get(
          "http://192.168.0.106:3000/journeys/me",
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
      console.log(token);
      this.requestHeaders = {
        headers: { Authorization: "Bearer " + token }
      };
      this.loadJouerneyData();
      this.user();
    }
  },
  created() {
    this.loadCurrentUserData();
  },
  mounted() {
    this.user();
  }
};
</script>