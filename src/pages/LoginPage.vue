<template>
  <div>
    <div class="modal is-active">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Account Login</p>
          <button class="delete" aria-label="close"></button>
        </header>
        <section class="modal-card-body">
          <div class="field">
            <p class="control has-icons-left has-icons-right">
              <input class="input" type="email" placeholder="Email" />
              <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
              </span>              
            </p>
          </div>
          <div class="field">
            <p class="control has-icons-left">
              <input class="input" type="password" placeholder="Password" />
              <span class="icon is-small is-left">
                <i class="fas fa-lock"></i>
              </span>
            </p>
          </div>
          <div class="field">
            <p class="control">
              <button class="button is-dark is-focused">Login</button>              
            </p>
          </div>
        </section>
        <footer class="modal-card-foot">
          <div class="field is-grouped">
            <p class="control">              
              <a>Don't have an account yet? Sign up here!</a> 
            </p>
            <p class="control">              
              <a>Forgot Password?</a> 
            </p>
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
  .modal-background {
    background: #279D79
  }

  

  
</style>