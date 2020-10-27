<template>
  <div class="container mt-4">
    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">Username</label>
      </div>
      <div class="field-body">
        <div class="field">
          <p class="control is-expanded has-icons-left">
            <input v-model="registrationData.firstname" class="input" type="text" placeholder="First Name" />
            <span class="icon is-small is-left">
              <i class="fas fa-user"></i>
            </span>
          </p>
        </div>
        <div class="field">
          <p class="control is-expanded has-icons-left">
            <input v-model="registrationData.lastname" class="input" type="text" placeholder="Last Name" />
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
              <input v-model="registrationData.phone" class="input" type="tel" placeholder="Your phone number" />
            </p>
          </div>
        </div>
        <div class="field">
          <p class="control is-expanded has-icons-left has-icons-right">
            <input v-model="registrationData.email" class="input" type="email" placeholder="Email" value="" />
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
            <input v-model="registrationData.password" class="input" type="text" />            
          </p>
        </div>
        <div class="field-label is-normal">
          <label class="label">Profile</label>
        </div>
        <div class="field">
          <div class="control">
            <div class="select is-fullwidth">
              <select v-model="registrationData.profile">
                <option>User</option>
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
            <button class="button is-dark is-focused is-medium is-fullwidth title">Create User</button>
          </div>
        </div>
      </div>
    </div>    
  </div>
</template>

<script>
export default {
  name: "RegisterPage",
  data() {
    return {
      registrationData: {
        firstname: "",
        lastname:"",
        phone: "",
        email: "",
        password: "",
        profile: "User",
        isEnabled: true,
      },
    };
  },
  methods: {
    async register() {
      console.info(
        "Enviamos los datos para solicitar el registro de un nuevo usuario"
      );
      try {
        let result = await this.axios.post(
          "http://localhost:3000/users",
          this.registrationData
        );
        console.info(result);
        alert(
          "Te has registrado satisfactorizamente. Puedes acceder con tu nueva cuenta desde el formulario de identificación"
        );
        this.$router.push("/login");
      }catch{

      }
    },
  },
};
</script>

<style>
  
</style>