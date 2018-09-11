<template>
    <div class="todo-item">
        <input class="status" type="checkbox">
        <ToDoDescription class="description" :description="description" />
    </div>
</template>

<script>
import ToDoDescription from '../atoms/ToDoDescription.vue'

export default {
  name: 'ToDoItem',
  props: {
    description: {
      type: String,
      required: true
    }
  },
  components: {
    ToDoDescription
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
    .todo-item .status {
        margin-left: 3%;
        align-self: center;
    }
    .todo-item .description {
        padding: 1%;
        flex: 1;;
    }
</style>
