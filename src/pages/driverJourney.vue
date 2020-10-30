<template>
  <div>
    
    <Card  v-for="(item, index) in journeys" :key="index" :num="index" :item="item"  @click="aceptar" />
    
     <section v-if="(journeys.length===0)" class="section">
        <div class="container">
          <div class="columns is-multiline">
            <div class="column is-one-third">
              <article class="notification media has-background-white">
                <figure class="media-left">
                  <span class="icon has-text-danger">
                    <i class="fa fa-lg fa-car"></i>
                  </span>
                </figure>
                <div class="media-content">
                  <div class="content">
                    <h1 class="title is-size-4">No hay viajes pendientes </h1>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
  </div>
 
  <!-- <div v-for="(journey,index) in journeys" :key="index"
         @click="aceptar(journey._id)" class="section"> -->

  <!--    
      <div v-if="(journeys.length===0)">
        <div class="card">
          <div class="card-content">
              <p class="title">
                No hay viajes pendientes
              </p>
          </div>
        </div>
      </div> -->
</template>


<script>
import Card from "../components/journeyCard";
export default {
  name: "DriverJourney",
  data() {
    return {
      intervalId:"",
      noViajes:{

      },
      journeys: [],
      requestHeaders: "",
    };
  },
  components: {
    Card,
  },
  methods: {
    
    async loadCurrentUserData() {
      let token = this.$store.state.token
      
      this.requestHeaders = {
        headers: { Authorization: "Bearer " + token },
      };
    },
    
    async loadJourneys() {
      try {
        let result = await this.axios.get("http://localhost:3000/journeys");
        // console.log(result.data)
        this.journeys = result.data;
        // console.log(this.journeys);
        
      } catch (e) {
        console.log("Error al cargar viajes");
      }
    },

    async aceptar(id) {
      try{
        console.log(this.requestHeaders);
      console.log(id);
      let result = await this.axios.patch(
        "http://localhost:3000/journeys/" + id,
        {},
        this.requestHeaders
      );
      this.$store.dispatch('loadJourneyId', id)
      this.$router.push('/in-journey-driver')
      
      }catch(e){
        console.log("Error al aceptar el viaje")
      }
      
    },
  },
  mounted() {
    console.log("MOUNTED");
    this.loadJourneys()
    this.intervalId = setInterval(() => {
      this.loadJourneys()
      console.log("RECARGADO")
    }, 5000);

    this.loadCurrentUserData();
  },
  destroyed(){
    console.log("DESTROYED")
    clearInterval(this.intervalId)     
  }
};
</script>
<style>
</style>
