<template>
  <div>
    <div class="mt-6 mb-5">
      <p class="title is-2 has-text-centered has-text-white">
        Account Login
      </p>
    </div>
    <section class="card-content section">
      <div class="field mb-5">
        <p class="control has-icons-left has-icons-right">
          <input v-model="loginPayload.email" class="input is-medium" type="email" placeholder="Email" />
          <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
          </span>
        </p>
      </div>
      <div class="field mb-6">
        <p class="control has-icons-left">
          <input v-model="loginPayload.password" class="input is-medium" type="password" placeholder="Password" />
          <span class="icon is-small is-left">
            <i class="fas fa-lock"></i>
          </span>
        </p>
      </div>
      <div class="field">
        <p class="control">
          <button @click="login" class="button title is-dark is-focused is-large is-fullwidth">Login</button>
        </p>
      </div>
    </section>
    
    <footer class="container mt-6 mb-6">
      <div class="field">
        <p class="control has-text-centered mb-6">
          <router-link to="/register">
            <a class="has-text-primary-light title is-4">Don't have an account yet? Sign up here!</a>
          </router-link>
        </p> <br>
        <p class="control has-text-centered">
          <a class="has-text-primary-light title is-4">Forgot Password?</a>
        </p>
      </div>
      <div class="space"></div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      loginPayload: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async login() {
      const response = await this.axios.post(
        "http://localhost:3000/auth/login",
        this.loginPayload
      );
      console.log("logeado");
      window.localStorage.setItem("token", response.data.token);
      console.log(response.data.token);
      this.$router.push("/search");
    },
  },
};
</script>

<style>
.container {
  width: 80%;
}
.container {
  width: 80%;
}
.space {
  height: 120px;
}
</style>