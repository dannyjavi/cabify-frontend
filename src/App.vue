<template>
  <div id="app">
    <Navbar />
    <router-view />
    <MainFooter />
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
  mounted(){
    this.$store.dispatch('isToken')
  }
}
</script>

<style>

</style>