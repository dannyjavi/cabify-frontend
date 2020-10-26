<template>
  <div id="maindiv" class="container mt-4">
    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">Username</label>
      </div>
      <div class="field-body">
        <div class="field">
          <p class="control is-expanded has-icons-left">
            <input class="input" type="text" placeholder="First Name" />
            <span class="icon is-small is-left">
              <i class="fas fa-user"></i>
            </span>
          </p>
        </div>
        <div class="field">
          <p class="control is-expanded has-icons-left">
            <input class="input" type="text" placeholder="Last Name" />
            <span class="icon is-small is-left">
              <i class="fas fa-user"></i>
            </span>
          </p>
        </div>
      </div>
    </div>

    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">Contact Info</label>
      </div>
      <div class="field-body">
        <div class="field is-expanded">
          <div class="field has-addons">
            <p class="control">
              <a class="button is-static"> +34 </a>
            </p>
            <p class="control is-expanded">
              <input class="input" type="tel" placeholder="Your phone number" />
            </p>
          </div>
        </div>
        <div class="field">
          <p class="control is-expanded has-icons-left has-icons-right">
            <input class="input" type="email" placeholder="Email" value="" />
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
          </p>
        </div>
      </div>
    </div>

    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">Password</label>
      </div>
      <div class="field-body">
        <div class="field">
          <p class="control is-expanded has-icons-left">
            <input class="input" type="text" />            
          </p>
        </div>
        <div class="field-label is-normal">
          <label class="label">Profile</label>
        </div>
        <div class="field">
          <div class="control">
            <div class="select is-fullwidth">
              <select>
                <option>Normal User</option>
                <option>Driver</option>
                <option>Admin</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>    

    <div class="field is-horizontal">
      <div class="field-label">
        <!-- Left empty for spacing -->
      </div>
      <div class="field-body">
        <div class="field">
          <div class="control">
            <button class="button is-primary">Create User</button>
          </div>
        </div>
      </div>
    </div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia aspernatur et non enim quia dolorem repudiandae sint a ullam, delectus incidunt tempora aperiam cumque labore maiores! Alias eius vel cum.</p>
  </div>
</template>

<script>
export default {
  name: "RegisterPage",
};
</script>

<style>
  #maindiv {
    background-color: green;
  }
</style>