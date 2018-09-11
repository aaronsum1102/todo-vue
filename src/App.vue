<template>
    <div class="app">
        <Header/>
        <ToDoList/>
    </div>
</template>

<script>
import Header from './components/organisms/Header.vue'
import ToDoList from './components/organisms/ToDoList.vue'

export default {
  name: 'app',
  components: {
    Header,
    ToDoList
  }
}
</script>

<style>
    .app {
        font-family: Arial, Helvetica, sans-serif;
    }
</style>
