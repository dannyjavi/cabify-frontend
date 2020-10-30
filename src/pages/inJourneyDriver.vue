<template>
  <section class="section">
    <div class="container">
      <article class="message">
        <div class="message-header">
          <p>¡Hola Persona!</p>
        </div>
        <div class="message-body">
          En breve un CoffeDriver te recogerá en tu destino!
        </div>
        <div class="p-3 container">
          <button class="button is-dark is-fullwidth">Terminar Viaje</button>
        </div>
      </article>
    </div>
  </section>
</template>


<script>
export default {
  name: "inJourneyDriver",
  data() {
    return {
      requestHeaders: "",
    };
  },
  methods: {
    async loadCurrentUserData() {
      let token = this.$store.state.token
      
      this.requestHeaders = {
        headers: { Authorization: "Bearer " + token },
      };
    },
    async loadJourney() {
      console.log("HOLA");
       try{
      let id = this.$store.state.currentJourneyId

      console.log("AQUI CHACHI"+id);
      let result = await this.axios.get(
        "http://localhost:3000/journeys/" + id,
        {},
        this.requestHeaders
      );
      console.log(result.data)
    }catch(e){
      console.log("Error al cargar el viaje")
    }
    },
  },
  mounted() {
    this.loadJourney();
  },
};
</script>

<style>
</style>
