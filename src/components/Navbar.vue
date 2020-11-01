<template>
  <div>
    <!-- START NAV -->
    <nav class="navbar is-dark" @mouseleave="closeMenu">
      <div class="container">
        <div class="navbar-brand">
          <router-link v-if="!isDriver" class="navbar-item brand-text" to="/">{{
            userName
          }}</router-link>
          <router-link v-if="isDriver" class="navbar-item brand-text" to="/journey-driver">{{
            userName
          }}</router-link>
          <div
            @click="toggleMenu"
            class="navbar-burger burger"
            data-target="navMenu"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div id="navMenu" class="navbar-menu" :class="menuClass">
          <div @click="toggleMenu" class="navbar-start">
            <router-link v-if="!isDriver" class="navbar-item" to="/"
              >Home</router-link
            >
            <router-link
              v-if="!isDriver"
              class="navbar-item"
              to="/order-page"
              >Buscar viaje</router-link
            >
            <router-link v-if="isLogged" class="navbar-item" to="/profile"
              >Account</router-link
            >
            <router-link
              v-if="isLogged && isDriver"
              class="navbar-item"
              to="/journey-driver"
              >Pending Travels</router-link
            >
            <router-link v-if="!isLogged" class="navbar-item" to="/login"
              >Login</router-link
            >
            <a @click.prevent="logout" v-if="isLogged" class="navbar-item"
              >Logout</a
            >
          </div>
        </div>
      </div>
    </nav>
    <!-- END NAV -->
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      menuClass: "",
      menuOptions: [
        { title: "Home", path: "/" },
        { title: "Register", path: "/register" },
      ],
    };
  },
  computed: {
    menu() {
      let menuOptions = [
        { title: "Home", path: "Home" },
        { title: "Terminos us", path: "Terms" },
      ];
      return menuOptions;
    },
  },
  methods: {
    toggleMenu() {
      if (this.menuClass == "") {
        this.menuClass = "is-active";
      } else {
        this.menuClass = "";
      }
    },
    closeMenu() {
      this.menuClass = "";
    },
    logout() {
      localStorage.removeItem("Viajes");
      this.$buefy.toast.open({
        message: "Successful logout!",
        type: "is-info",
      });
      this.$store.dispatch("logout");
      this.$router.push("/");
    },
  },
  computed: {
    isDriver() {
      if(!this.$store.state.user) return
      return this.$store.state.user.profiles.includes("driver");
    },

    isLogged() {
      return this.$store.state.isAuth;
    },
    userName() {
      if (this.$store.state.user != null) {
        return "Hola, " + this.$store.state.user.first_name;
      } else {
        return "CoffeBy";
      }
    },
  },
};
</script>

<style>
</style>