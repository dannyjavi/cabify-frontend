<template>
  <div>
    <header class="mt-6">
      <p class="title is-2 has-text-centered has-text-white">Account Login</p>
    </header>
    <section class="card-content has-background-success">
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
          <input class="input is-medium" type="password" placeholder="Password" />
          <span class="icon is-small is-left">
            <i class="fas fa-lock"></i>
          </span>
        </p>
      </div>
      <div class="field">
        <p class="control">
          <button class="button is-dark is-focused is-medium is-fullwidth title">Login</button>
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
export default {};
</script>

<style>
 .container {
   width: 80%;
 }
</style>