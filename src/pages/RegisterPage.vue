<template>
  <div class="section">
    <div class="mb-6">
      <p class="title is-2 has-text-centered has-text-white">Sign Up</p>
    </div>
    <div class="field">
      <div class="field-label is-normal mb-3">
        <label class="label is-size-4">Username</label>
      </div>
      <div class="field-body">
        <div class="field mb-5">
          <p class="control is-expanded has-icons-left">
            <input
              v-model="registrationData.first_name"
              class="input is-size-5"
              type="text"
              placeholder="First Name"
            />
            <span class="icon is-small is-left">
              <i class="fas fa-user"></i>
            </span>
          </p>
          <p v-if="showError" class="help is-danger is-size-5">This field is required</p>
        </div>
        <div class="field mb-5">
          <p class="control is-expanded has-icons-left">
            <input
              v-model="registrationData.last_name"
              class="input is-size-5"
              type="text"
              placeholder="Last Name"
            />
            <span class="icon is-small is-left">
              <i class="fas fa-user"></i>
            </span>
          </p>
          <p v-if="showError" class="help is-danger is-size-5">This field is required</p>
        </div>
      </div>
    </div>

    <div class="field">
      <div class="field-label is-normal mb-3">
        <label class="label is-size-4">Contact Info</label>
      </div>
      <div class="field-body">
        <div class="field is-expanded">
          <div class="field has-addons mb-3">
            <p class="control">
              <a class="button is-medium is-static"> +34 </a>
            </p>
            <p class="control is-expanded">
              <input
                v-model="registrationData.phone"
                class="input is-size-5"
                type="tel"
                placeholder="Your phone number"
              />
            </p>
          </div>
          <p v-if="showError" class="help is-danger is-size-5">This field is required</p>
        </div>
        <div class="field mb-6">
          <p class="control is-expanded has-icons-left has-icons-right">
            <input
              v-model="registrationData.email"
              class="input is-medium is-size-5"
              type="email"
              placeholder="Email"
              value=""
            />
            <span class="icon is-medium is-left">
              <i class="fas fa-envelope"></i>
            </span>
          </p>
          <p v-if="showError" class="help is-danger is-size-5">This field is required</p>
        </div>
      </div>
    </div>

    <div class="field">
      <div class="field-label is-normal mb-3">
        <label class="label is-size-4">Password</label>
      </div>
      <div class="field-body">
        <div class="field mb-6">
          <p class="control is-expanded has-icons-left">
            <input
              v-model="registrationData.password"
              class="input is-medium is-size-5"
              type="password"
            />
            <span class="icon is-small is-left">
              <i class="fas fa-lock"></i>
            </span>
          </p>
          <p v-if="showError" class="help is-danger is-size-5">This field is required</p>
        </div>

        <label class="checkbox is-size-5 title">
          <input v-model="acepted" type="checkbox" />
          I agree to the
          <router-link link to="/terms">terms and conditions</router-link>
        </label>
        <!-- <div class="modal is-active">
          <div class="modal-card">
            <header class="modal-card-head">
              <p class="modal-card-title">Aceptar condiciones de uso</p>
              <button class="delete" aria-label="close"></button>
            </header>
          </div>
        </div> -->
      </div>
    </div>

    <div class="field">
      <div class="field-label">
        <!-- Left empty for spacing -->
      </div>
      <div class="field-body mt-5">
        <div class="field">
          <div class="control">
            <button
              @click="register"
              class="button is-dark is-focused is-fullwidth title is-4"
            >
              Create User
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const axios = require("axios");
export default {
  name: "RegisterPage",
  data() {
    return {
      showError: false,
      acepted: false,
      registrationData: {
        first_name: "",
        last_name: "",
        phone: "",
        email: "",
        password: "",
      },
    };
  },

  methods: {
    async register() {
      console.info(
        "Enviamos los datos para solicitar el registro de un nuevo usuario"
      );
      if (this.acepted === false) {
        this.$buefy.toast.open({
          duration: 2500,
          message: `Accept the terms and conditions of use`,
          position: "is-top",
          type: "is-warning",
        });
        return;
      }
      try {
        let result = await this.axios.post(
          "http://localhost:3000/users",
          this.registrationData
        );
        console.info(result);
        this.$buefy.toast.open({
          duration: 2500,
          message: `You have registered successfully!`,
          position: "is-top",
          type: "is-success",
        });
        this.$router.push("/login");
      } catch (e) {
        console.log(e, this.registrationData);
        this.$buefy.toast.open({
          duration: 2500,
          message: `Se ha producido un error al enviar el formulario`,
          position: "is-bottom",
          type: "is-danger",
        })
        this.showError = true
      }
    },
  },
};
</script>

<style>
.modal-card-title {
  font-size: 27%;
}
</style>