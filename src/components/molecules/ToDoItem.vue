<template>
    <div class="todo-item">
        <input class="status" type="checkbox">
        <ToDoMessage class="details" :message="description" />
    </div>
</template>

<script>
import ToDoMessage from '../atoms/TextMessage.vue'

export default {
  name: 'ToDoItem',
  props: {
    description: {
      type: String,
      required: true
    }
  },
  components: {
    ToDoMessage
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

    .todo-item .details {
        padding: 1%;
        flex: 1;
        ;
    }
</style>
