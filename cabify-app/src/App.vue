<template>
  <div id="app">
    <MainNav />
    <router-view />
    <MainFooter />
  </div>
</template>

<script>
import MainNav from './components/MainNav'
import MainFooter from './components/MainFooter'
export default {
  name: 'App',
  components: { MainNav, MainFooter }
}
</script>

<style>

</style>