<template>
  <section>
    <!-- START NAV -->
    <nav class="navbar is-dark" @mouseleave="closeMenu">
      <div class="container">
        <div class="navbar-brand">
          <router-link
            v-if="!isDriver | !driverProfile"
            class="navbar-item brand-text"
            to="/"
            >{{ userName }}</router-link
          >
          <router-link
            v-if="isDriver & driverProfile"
            class="navbar-item brand-text"
            to="/journey-driver"
            >{{ userName }}</router-link
          >
          <a
            v-if="isLogged && isDriver"
            @click="driverSwitch"
            class="navbar-item"
          >
            Driver Mode
            <b-switch @click="driverSwitch" class="ml-3" :value="driverProfile" :trueValue="driverProfile">
            </b-switch>
          </a>
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
            <router-link
              v-if="!isDriver | !driverProfile"
              class="navbar-item"
              to="/"
              >Home</router-link
            >
            <router-link
              v-if="!isDriver | !driverProfile"
              class="navbar-item"
              to="/order-page"
              >Buscar viaje</router-link
            >
            <router-link v-if="isLogged" class="navbar-item" to="/profile"
              >Account</router-link
            >
            <router-link v-if="isLogged" class="navbar-item" to="/dashboard"
              >Dashboard</router-link
            >
            <router-link
              v-if="isLogged && isDriver && driverProfile"
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

    
  </section>
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
      driverProfile: true,
    };
  },
  computed: {
    menu() {
      let menuOptions = [
        { title: "Home", path: "Home" },
        { title: "Terminos us", path: "Terms" }
      ];
      return menuOptions;
    }
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
        type: "is-info"
      });
      this.$store.dispatch("logout");
      this.$router.push("/");
    },
    driverSwitch() {
      if (this.driverProfile == true) {
        this.$router.push("/")        
        this.driverProfile = false;   
        return     
      }
      if (this.driverProfile == false) {
        this.$router.push("/journey-driver")        
        this.driverProfile = true;  
        return      
      } 
    },
  },
  computed: {
    isDriver() {
      if (!this.$store.state.user) return;
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
    }
  }
};
</script>

<style lang="css" scoped>
/* html, body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 16px;
  line-height: 1.5;
  height: 100%;
  background: #ECF0F3;
}
nav.navbar {
  border-top: 4px solid #276cda;
  margin-bottom: 1rem;
}
.navbar-item.brand-text {
  font-weight: 300;
}
.navbar-item, .navbar-link {
  font-size: 14px;
  font-weight: 700;
} */
</style>