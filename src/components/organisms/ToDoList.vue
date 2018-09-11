<template>
    <div class="todo-list">
        <ToDoItem
          v-for="todo in todos"
          v-bind:key="todo.id"
          :todo="todo"
          :description="todo.item" />
    </div>
</template>

<script>
import ToDoItem from '../molecules/ToDoItem.vue'

export default {
  name: 'ToDoList',
  data: function () {
    return {
      todos: [
        { item: 'working on css. Sytling is an art!' },
        { item: 'working on vue' }
      ]
    }
  },
  components: {
    ToDoItem
  }
}
</script>

<style scoped>
  .todo-list{
    font-size: 2vh;
  }
</style>
