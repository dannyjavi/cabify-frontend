<template>
  <div>
    <div class="mt-6 mb-5">
      <p class="title is-2 has-text-centered has-text-white">Account Login</p>
    </div>
    <section class="card-content section">
      <div class="field mb-5">
        <p class="control has-icons-left has-icons-right">
          <input
            v-model="formLogin.email"
            class="input is-medium"
            type="email"
            placeholder="Email"
          />
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
          <button
            @click="login"
            class="button title is-dark is-focused is-large is-fullwidth"
          >
            Login
          </button>
        </p>
      </div>
    </section>

    <template>
      <Preloader />
    </template>

    <footer class="container mt-6 mb-6">
      <div class="field">
        <p class="control has-text-centered mb-6">
          <router-link to="/register">
            <a class="has-text-primary-light title is-4"
              >Don't have an account yet? Sign up here!</a
            >
          </router-link>
        </p>
        <br />
        <p class="control has-text-centered">
          <a class="has-text-primary-light title is-4">Forgot Password?</a>
        </p>
      </div>
      <div class="space"></div>
    </footer>
  </div>
</template>

<script>
import Preloader from '../components/Preloader'

export default {
  name: "LoginPage",
  components:{
    Preloader
  },
  data() {
    return {
      show: false,
      formLogin: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async login() {
      this.showToggle()
      try {
        let response = await this.axios.post(
        "http://192.168.0.106:3000/auth/login",
        this.formLogin
      );
      
      this.$buefy.toast.open({
        message: 'Succesfull login',
        type: 'is-success'
      })
      //guardo el token en el localStorage
      window.localStorage.setItem("token", response.data.token);
       
      // guardo la respuesta en el store
      this.$store.dispatch('login', response.data.token)
      let user_profile = this.$store.state.user.profiles[0]
      
      if (user_profile === 'driver') {
        this.$router.push('/journey-driver')
        return
      }
        this.$router.push('/order-page')
       
     } catch (error) {
       this.$buefy.toast.open({
         duration: 5000,
         message: "Password or email incorrect",
         position: 'is-buttom',
         type: 'is-danger'
       })
     }     
      //this.$router.push("/search");
    },
    showToggle(){
      setTimeout(() => {
        this.show = false
      }, 700)
    }
  },
};
</script>

<style scoped>
.container {
  width: 80%;
}
.space {
  height: 120px;
}
</style>