<template>
  <div class="main">
    <div>
      <header class="mt-6">
        <p class="title is-2 has-text-centered has-text-white">Account Login</p>
      </header>
      <section class="card-content has-success-color">
        <div class="field">
          <p class="control has-icons-left has-icons-right">
            <input class="input is-medium" type="email" placeholder="Email" />
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
          </p>
        </div>
        <div class="field">
          <p class="control has-icons-left">
            <input
              class="input is-medium"
              type="password"
              placeholder="Password"
            />
            <span class="icon is-small is-left">
              <i class="fas fa-lock"></i>
            </span>
          </p>
        </div>
        <div class="field">
          <p class="control">
            <button
              class="button is-dark is-focused is-medium is-fullwidth title"
            >
              Login
            </button>
          </p>
        </div>
      </section>
    

      <footer class="container">
        <div class="field">
          <p class="control has-text-centered">
            <a class="has-text-primary-light title is-4"
              >Don't have an account yet? Sign up here!</a
            >
          </p>
          <br />
          <p class="control has-text-centered">
            <a class="has-text-primary-light title is-4">Forgot Password?</a>
          </p>
        </div>
      </footer>
    </div>
  
    <header class="mt-6">
      <p class="title is-2 has-text-centered has-text-white">
        Account Login
      </p>
    </header>
    <section class="card-content">
      <div class="field">
        <p class="control has-icons-left has-icons-right">
          <input v-model="loginPayload.email" class="input is-medium" type="email" placeholder="Email" />
          <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
          </span>
        </p>
      </div>
      <div class="field">
        <p class="control has-icons-left">
          <input v-model="loginPayload.password" class="input is-medium" type="password" placeholder="Password" />
          <span class="icon is-small is-left">
            <i class="fas fa-lock"></i>
          </span>
        </p>
      </div>
      <div class="field">
        <p class="control">
          <button @click="login" class="button is-dark is-focused is-medium is-fullwidth title">Login</button>
        </p>
      </div>
    </section>
    
    <footer class="container">
      <div class="field">
        <p class="control has-text-centered">
          <a class="has-text-primary-light title is-4">Don't have an account yet? Sign up here!</a>
        </p> <br>
        <p class="control has-text-centered">
          <a class="has-text-primary-light title is-4">Forgot Password?</a>
        </p>
      </div>
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
      this.$router.push("/");
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
</style>