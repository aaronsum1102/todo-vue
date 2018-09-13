<template>
    <div class="todo-item">
        <input class="status" type="checkbox" @click="$emit('markDone')" v-model="status" />
        <to-do-item-message class="details" :message="description" />
    </div>
</template>

<script>
import ToDoItemMessage from '../atoms/TextMessage.vue'

export default {
  name: 'ToDoListItem',
  props: {
    description: {
      type: String,
      required: true
    },
    status: {
      type: Boolean,
      required: true
    }
  },
  components: {
    ToDoItemMessage
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
  margin-left: 1%;
  align-self: center;
}

.todo-item .details {
  padding: 1%;
  flex: 1;
}
</style>
