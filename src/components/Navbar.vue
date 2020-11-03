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
          <span 
            v-if="isLogged && isDriver"            
            class="navbar-item"
          >
            Driver Mode
          </span>
          <a class="navbar-item" v-if="isLogged && isDriver">
            <div @click="driverSwitch" >
            <b-switch  v-model="driverProfile" class="ml-3">              
            </b-switch>
            </div>
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
            <router-link v-if="user" class="navbar-item" to="/history"
              >History</router-link
            >
            <router-link v-if="isLogged && !driverProfile " class="navbar-item" to="/history"
              >History</router-link
            >
            <router-link v-if="isLogged && isDriver && driverProfile" class="navbar-item" to="/history-driver"
              >History Driver</router-link>
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
    },
    user(){
      if (!this.$store.state.user) return;
      console.log(this.$store.state.user.profiles.length)
      return (this.$store.state.user.profiles.length === 1);
    },
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
      this.driverProfile = true
      this.isSwitched = true
      this.$buefy.toast.open({
        duration: 2500,
        message: "Successful logout!",
        type: "is-info"
      });
      this.$store.dispatch("logout");
      this.$router.push("/");
    },
    driverSwitch() {
      if (this.driverProfile == true) {
        console.log('switch off')
        this.$router.push("/order-page")        
        return     
      }
      if (this.driverProfile == false) {
        console.log('switch on')
        this.$router.push("/journey-driver")        
        return      
      } 
    },
  }
};
</script>

<style lang="css" scoped>

nav.navbar {
  border-top: 0;
}

</style>