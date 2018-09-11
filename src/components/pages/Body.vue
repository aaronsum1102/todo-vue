<template>
    <div class="body">
        <InputForm class="input-form" />
        <ToDoList class="todo-list" />
    </div>
</template>

<script>
import ToDoList from '../organisms/ToDoList.vue'
import InputForm from '../molecules/InputForm.vue'

export default {
  name: 'Body',
  components: {
    ToDoList,
    InputForm
  }
}
</script>

<style scoped>
    .body {
        margin-top: 3%;
        margin-left: 1%;
        margin-right: 1%;
        margin-bottom: 3%;
    }

    .body .todo-list {
        font-size: 2vh;
    }
</style>
