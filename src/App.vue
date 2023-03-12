<style>
.wrap-component {
  background-color: #F0F3FA;
  margin-left: 222px;
  padding: 90px 24px 24px 24px;
}
</style>

<template>
  <HeaderPage></HeaderPage>
  <AsideControl></AsideControl>
  <div class="wrap-component">
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderPage from './components/header-page.vue'
import AsideControl from './components/aside-page.vue'
export default {
  name: 'App',
  components: {
    HeaderPage,
    AsideControl,

  },

}
</script>