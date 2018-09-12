<template>
  <div class="todo-list">
    <to-do-list-item class="item" v-for="todo in todos" v-bind:key="todo.id" :todo="todo" :description="todo.item" />
  </div>
</template>

<script>
import ToDoListItem from '../molecules/ToDoListItem.vue'

export default {
  name: 'ToDoList',
  data: function () {
    return {
      todos: [{
        item: 'working on css. Sytling is an art!'
      },
      {
        item: 'working on vue'
      }
      ]
    }
  },
  components: {
    ToDoListItem
  }
}
</script>
