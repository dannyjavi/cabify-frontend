<template>
  <div  id="app">
    <Navbar />
    <router-view></router-view>
    <MainFooter class="bajo"/>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import MainFooter from './components/MainFooter'

export default {
  name: 'App',
  components: { 
    Navbar,
    MainFooter
  },
  created(){
    this.$store.dispatch('isToken')
  },

}
</script>

<style>
#app{
  margin-bottom:40px ;
}
.bajo {
 position: fixed;

 padding: 1rem 0 2rem 0 ;
  bottom: 0;
  width: 100%;
  height: 20px;
background-color: #279d79;
}
</style>