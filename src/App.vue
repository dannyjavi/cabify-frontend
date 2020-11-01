<template>
  <div id="app">
    <Navbar />
    <transition name='fade' mode='out-in'>
      <router-view />
    </transition>
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
  created(){
    this.$store.dispatch('isToken')
  },

}
</script>

<style>
.fade-enter .fade-leave-to{
  opacity: 0 .5s;
  transform: translateX(2em);
}

.fade-enter-active, .fade-leave-active {
  transition: all .8s ease;
}

</style>