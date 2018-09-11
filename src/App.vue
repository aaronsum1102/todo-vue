<template>
    <div class="app">
        <Header/>
        <Body/>
    </div>
</template>

<script>
import Header from './components/pages/Header.vue'
import Body from './components/pages/Body.vue'

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
    }
</style>
