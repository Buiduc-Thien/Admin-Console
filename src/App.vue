<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');


body {
  font-family: 'Roboto', sans-serif !important;
  &.login-page {
    background-color: #F0F3FA !important;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 60px;
  }
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
  <router-view>
    
  </router-view>
</template>

<script>
export default {
  name: 'App',
  components: {

  },

}
</script>