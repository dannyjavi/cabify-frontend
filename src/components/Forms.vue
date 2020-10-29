<template>
  <div>
    <div class="columns">
      <div class="column is2">
        <div class="card bg-green-figma">
          <div class="card-content">
            <div class="content">
              <div class="field">
                <p class="control has-icons-left has-icons-right">
                  <input v-model="form.origen" class="input" type="text" placeholder="ubicación" />
                  <span class="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
                  </span>
                  <span class="icon is-small is-right">
                    <i class="fas fa-check"></i>
                  </span>
                </p>
              </div>
              <div class="field">
                <p class="control has-icons-left">
                  <input v-model="form.destino" class="input" type="text" placeholder="Destino" />
                  <span class="icon is-small is-left">
                    <i class="fas fa-lock"></i>
                  </span>
                </p>
              </div>
              <div class="field is-grouped is-grouped-centered">
                <p class="control">
                  <router-link to="/list">
                    <button 
										@click="passDataTravel(form)"
										class="button is-success">Pide ahora</button>
                  </router-link>
                </p>
              </div>
            </div>
          </div>
          <div class="card-image">
            <figure class="image">
              <Map />
            </figure>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Map from "./Map";

export default {
  name: "FormComponent",
  components: {
    Map
	},
  data() {
    return {
      form: {
        origen: "málaga",
        destino: "sevilla"
      }
    };
	},
	methods:{
		passDataTravel(){
      this.$store.dispatch('loadTravel', this.form)
      this.listVehicles()
    },
    listVehicles(){
      this.$store.dispatch('loadVehicles')
    }
	}
};
</script>

<style scoped>
</style>
