<template>
  <div  id="app">
    <Navbar />
    <transition name='fade' mode='out-in'>
      <router-view />
    </transition>
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
.fade-enter-active, .fade-leave-active {
  transition: all .3s ease;
}

.fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.fade-enter .fade-leave-to{
  transform: translateX(10px);
  opacity: 0;
}
</style>