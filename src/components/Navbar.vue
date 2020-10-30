<template>
  <div>
    <!-- START NAV -->
    <nav class="navbar is-dark">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item brand-text" href="/order-page">CoffeBy</a>
          <div @click="toggleMenu" class="navbar-burger burger" data-target="navMenu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div id="navMenu" class="navbar-menu" :class="menuClass">
          <div @click="toggleMenu" class="navbar-start">
            <router-link class="navbar-item" to="/">Home</router-link>
            <router-link class="navbar-item" to="/config">Account</router-link>
            <router-link class="navbar-item" to="/journey-driver">My Travels</router-link>
            <router-link class="navbar-item" to="/dashboard">Bonus Points</router-link>
            <router-link class="navbar-item" to="/login">Login</router-link>
            <a @click.prevent="logout" class="navbar-item">Logout</a>
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
      menuClass: ''
    }
  },
  methods: {
    toggleMenu() {
      if(this.menuClass == '') {
        this.menuClass = 'is-active'
      } else {
        this.menuClass = ''
      }
    },
    logout(){
      this.$store.dispatch('logout')
      this.$router.push('/')
    }
  }
};
</script>

<style>
  
</style>