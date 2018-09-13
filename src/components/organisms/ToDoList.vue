<template>
  <div class="todo-list">
    <to-do-list-item class="item"
      v-for="todo in todos"
      v-bind:key="todo.id"
      :todo="todo"
      :description="todo.item"
      :status="todo.status"
      v-on:markDone="markAsDone(todo)"/>
  </div>
</template>

<script>
import ToDoListItem from '../molecules/ToDoListItem.vue'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'ToDoList',
  components: {
    ToDoListItem
  },
  computed: {
    ...mapState([
      'todos'
    ])
  },
  methods: {
    ...mapMutations([
      'markAsDone'
    ])
  }
}
</script>
