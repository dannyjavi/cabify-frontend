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
            <b-field label="Email">
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
    </div>
  </section>
</template>

<script>
export default {
  name: "ProfilePage",
  components: {},
  data() {
    return {
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
    async editProfile(formObject) {
      this.userId = this.$store.state.user.id;
      try {
        // con la baseUrl se usa asi? = this.axios.put(baseUrl + ':3000/users + this.userId + '/update)
        const send = await this.axios.put(
          "https://grupo3-backend-coffeby.herokuapp.com/users/" + this.userId + "/update",
          formObject,
          this.requestHeaders
        );

        if (send.status === 200) {
          let value_token = send.data.token;
          this.$store.dispatch("updateProfile", value_token);
        }
      } catch (e) {
        throw new Error("No se han podido cambiar los datos!");
      }
    },
    async user() {
      this.userId = this.$store.state.user.id;

      try {
        const result = await this.axios.get(
          "https://grupo3-backend-coffeby.herokuapp.com/users/" + this.userId,
          this.requestHeaders
        );
        this.edit = result.data;
      } catch (e) {
        throw new Error("Error al cargar los datos");
      }
    },
    loadCurrentUserData() {
      let token = this.$store.state.token;
      this.requestHeaders = {
        headers: { Authorization: "Bearer " + token }
      };
      this.user();
    }
  },
  created() {
    this.loadCurrentUserData();
  },
  mounted() {
    let token = this.$store.state.token;

    this.requestHeaders = {
      headers: { Authorization: "Bearer " + token }
    };
    this.user();
  }
};
</script>