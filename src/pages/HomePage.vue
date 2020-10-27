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
          <router-link to="/login">
            <button
              class="button is-white is-focused is-medium is-fullwidth title is-rounded"
            >
              Search CoffeBy Driver
            </button>
          </router-link>
        </p>
      </div>
      <br />
      <div class="field">
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
          <router-link to="/register">
            <button
              class="button is-white is-focused is-medium is-fullwidth title is-rounded"
            >
              Create Account
            </button>
          </router-link>
        </p>
      </div>
    </section>
  </div>
</template>

<script>
import Map from "../components/Map";
export default {
  name: "HomePage",
};
</script>

<style>
</style>