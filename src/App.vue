<template>
    <div class="app">
        <Header/>
        <Body/>
        <Summary/>
    </div>
</template>

<script>
import Header from './components/pages/Header.vue'
import Body from './components/pages/Body.vue'
import Summary from './components/atoms/SummaryMessage.vue'

export default {
  name: 'app',
  components: {
    Header,
    Body,
    Summary
  }
}
</script>

<style>
    .app {
        font-family: Arial, Helvetica, sans-serif;
    }
</style>
