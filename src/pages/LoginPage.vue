<template>
  <div>
    <div class="mt-6 mb-5">
      <p class="title is-2 has-text-centered has-text-white">Account Login</p>
    </div>
    <section class="card-content section">
      <div class="field mb-5">
        <p class="control has-icons-left has-icons-right">
          <input v-model="formLogin.email" class="input is-medium" type="email" placeholder="Email" />
          <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
          </span>
        </p>
      </div>
      <div class="field mb-6">
        <p class="control has-icons-left">
          <input
            v-model="formLogin.password"
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
          <button @click="login" class="button title is-dark is-focused is-large is-fullwidth">Login</button>
        </p>
      </div>
    </section>
      <b-loading :is-full-page="isFullPage" v-model="isLoading" :can-cancel="true"></b-loading>

    <footer class="container mt-5 mb-6">
      <div class="field">
        <p class="control has-text-centered mb-6">
          <router-link to="/register">
            <span class="has-text-primary-light title is-5">
              Don't have an account yet?
              <span class="has-text-warning">Sign up here!</span>
            </span>
          </router-link>
        </p>
        <!-- <br />
        <p class="control has-text-centered">
          <a class="has-text-primary-light title is-4">Forgot Password?</a>
        </p>-->
      </div>
    </footer>
  </div>
</template>

<script>

export default {
  name: "LoginPage",
  components:{
  },
  data() {
    return {
      isLoading: false,
      isFullPage: true,
      formLogin: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    openLoading(){
      this.isLoading = true
    },
    closeLoading(){
      this.isLoading = false
    },
    async login() {
      this.openLoading()
      try {
        let response =  await this.axios.post(
          "http://192.168.0.106:3000/auth/login",
          this.formLogin
        )

        this.$buefy.toast.open({
          duration: 2000,
          message: "Successful login!",
          type: "is-success",
        });
        //guardo el token en el localStorage
        window.localStorage.setItem("token", response.data.token);

        // guardo la respuesta en el store
        this.$store.dispatch("login", response.data.token);
        let user_profile = this.$store.state.user.profiles[1];
        if (user_profile === "driver") {
          this.$router.push("/journey-driver");
          this.closeLoading()
          return;
        }
        this.$router.push("/order-page");
      } catch (error) {
        this.$buefy.toast.open({
          duration: 2500,
          message: `Incorrect email or password`,
          position: "is-bottom",
          type: "is-danger",
        });
      }
    }
  },
};
</script>

<style scoped>
.container {
  width: 80%;
}
</style>