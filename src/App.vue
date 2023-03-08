<style>
</style>

<template>
  <Header></Header>
  <router-view></router-view>
</template>

<script>
import Header from './components/HeaderPage.vue'
export default {
  name: 'App',
  components: { 
    Header
  },
  mounted() {
    console.log('app da duoc khoi tao');
  },
}
</script>