<template>
    <div class="todo-item">
        <input type="checkbox">
        <ToDoDescription id="description" :description="description" />
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
    input {
        margin-left: 3%;
        vertical-align: middle;
    }
    #description {
        display: inline-block;
        margin-left: 1%;
        margin-right: 1%;
    }
    .todo-item {
        margin-left: 1%;
        margin-right: 1%;
        margin-top: 2%;
        border: 2px solid;
        border-radius: 10px;
        border-color: skyblue;
        vertical-align: middle;
    }
</style>
