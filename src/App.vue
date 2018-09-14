<template>
    <div class="app">
        <Header class="header" />
        <Body class="body" />
    </div>
</template>

<script>
import Header from './components/views/Header.vue'
import Body from './components/views/Body.vue'

export default {
  name: 'app',
  components: {
    Header,
    Body
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
.body {
  font-size: 2vh;
}
</style>
