<template>
    <div class="body" >
        <ToDoCard
          v-for="todo in todos"
          v-bind:key="todo.id"
          :todo="todo"
          :description="todo.item" />
    </div>
</template>

<script>
import ToDoCard from '../molecules/ToDoCard.vue'

export default {
  name: 'Body',
  data: function () {
    return {
      todos: [
        { item: 'aaraon' },
        { item: 'bbron' }
      ]
    }
  },
  components: {
    ToDoCard
  }
}
</script>

<style>

</style>
