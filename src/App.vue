<template>
  <div id="app">
    <router-view />
    <MainFooter />
  </div>
</template>

<script>
import MainFooter from './components/MainFooter'

export default {
  name: 'App',
  components: { 
    MainFooter
  }
}
</script>

<style>

</style>