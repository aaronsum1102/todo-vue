<template>
    <div id="app">
        <Header/>
        <Body id="body" />
    </div>
</template>

<script>
import Header from './components/organisms/Header.vue'
import Body from './components/organisms/Body.vue'

export default {
  name: 'app',
  components: {
    Header,
    Body
  }
}
</script>

<style>
    #app {
        font-family: Arial, Helvetica, sans-serif;
    }
</style>
