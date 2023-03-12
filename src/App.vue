<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');

.wrap-component {
  background-color: #F0F3FA;
  margin-left: 222px;
  padding: 90px 24px 24px 24px;
}

body {
  font-family: 'Roboto', sans-serif !important;
  background-color: #F0F3FA;
}

.material-icons {
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  /* Kích thước của icon */
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: 'liga';
  -webkit-font-smoothing: antialiased;
}
</style>

<template>
  <HeaderPage></HeaderPage>
  <AsideControl></AsideControl>
  <router-view class="wrap-component"></router-view>
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