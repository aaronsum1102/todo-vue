<template>
    <div class="app">
        <Header class="header" />
        <router-view class="body"/>
        <navigation class="footer"/>
    </div>
</template>

<script>
import Header from './components/views/AppHeader.vue'
import Navigation from './components/molecules/NavigationButtons.vue'

export default {
  name: 'app',
  components: {
    Header,
    Navigation
  }
}
</script>

<style>
.app {
  font-family: Arial, Helvetica, sans-serif;
  margin-left: 1%;
  margin-right: 1%;
}
.header {
  font-size: 4vh;
  color: #ffffff;
  background-color: skyblue;
}
.body{
  height: 100%;
}
.footer{
  font-size: 2.5vh;
  position: absolute;
  bottom: 1%;
  margin-left: 1%;
  margin-right: 1%;
  left:0;
  right:0;
}
</style>
