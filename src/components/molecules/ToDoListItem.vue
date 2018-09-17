<template>
    <div class="todo-item">
        <input class="status"
          type="checkbox"
          :checked="todoItem.status"
          @change="setStatus(todoItem)"/>
        <to-do-item-message class="details"
          :message="todoItem.item"
          :class="{done: todoItem.status}" />
    </div>
</template>

<script>
import ToDoItemMessage from '../atoms/TextMessage.vue'
import { mapActions } from 'vuex'

export default {
  name: 'ToDoListItem',
  props: [
    'todoItem'
  ],
  components: {
    ToDoItemMessage
  },
  methods: {
    ...mapActions('todoStore', [
      'setStatus'
    ])
  }
}
</script>

<style scoped>
.todo-item {
  margin-top: 2%;
  margin-bottom: 2%;
  border: 2px solid;
  border-radius: 10px;
  border-color: skyblue;
  vertical-align: middle;
  display: flex;
}
.status {
  margin-left: 1%;
  align-self: center;
}
.details {
  padding: 1%;
  flex: 1;
}
.done {
  text-decoration: line-through;
  color: grey;
}
</style>
