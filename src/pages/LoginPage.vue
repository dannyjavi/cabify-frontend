<template>
  <div class="modal is-active">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Account Login</p>
      <button class="delete" aria-label="close"></button>
    </header>
    <section class="modal-card-body">
      <label class="label">User Email</label>
      <input class="input" type="email">
      <label class="label">User Password</label>
      <input class="input" type="text">
    </section>
    <footer class="modal-card-foot">
      <button class="button is-success">Log In</button>
      <button class="button is-info">Remember Me</button>
    </footer>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>