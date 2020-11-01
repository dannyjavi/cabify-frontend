<template>
  <div>
    <div class="container mt-6">
      <p class="title is-2 has-text-centered has-text-white">
        Welcome to <span class="is-italic">CoffeBy</span>
      </p>
      <figure class="image is-128x128 container">
        <img src="images/logo.png" />
      </figure>
    </div>
    <section class="card-content container">
      <div class="field">
        <p class="control">
          <router-link to="/order-page">
            <button
              class="button is-white is-focused is-medium is-fullwidth title is-rounded"
            >
              Search CoffeBy Driver
            </button>
          </router-link>
        </p>
      </div>
      <br />
      <div class="field" v-if="!isLogged">
        <p class="control">
          <router-link to="/login">
            <button
              class="button is-white is-focused is-medium is-fullwidth title is-rounded"
            >
              Login
            </button>
          </router-link>
        </p>
      </div>
      <br />
      <div class="field">
        <p class="control">
          <router-link :to="path">
            <button
              class="button is-white is-focused is-medium is-fullwidth title is-rounded"
            >
              {{ title }}
            </button>
          </router-link>
        </p>
      </div>
    </section>
    <div class="space"></div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      path: '',
      title: ''
    }
  },
  computed: {
    isLogged() {
      let profile = 'user'
      if(this.$store.state.isAuth && profile == 'user') {
        this.title = 'Convertirme en conductor'
        this.path = '/config'
      } else {
        this.title = 'Create Account'
        this.path = '/register'
      }
      return this.$store.state.isAuth
    }
  }
};
</script>

<style>
.space {
  height: 300px;
}
</style>