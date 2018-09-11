<template>
    <div class="body">
        <AlertMessage class="section-margin" v-if="indicator.toDisplay" message="placeholder text..." />
        <InputForm class="section-margin" />
        <ToDoList class="section-margin" id="todo-list" />
    </div>
</template>

<script>
import ToDoList from '../organisms/ToDoList.vue'
import InputForm from '../molecules/InputForm.vue'
import AlertMessage from '../molecules/AlertMessage.vue'

export default {
  name: 'Body',
  data: function () {
    return {
      indicator: {
        toDisplay: true
      }
    }
  },
  components: {
    ToDoList,
    InputForm,
    AlertMessage
  }
}
</script>

<style scoped>
    .section-margin {
        margin-top: 3%;
    }

    .body {
        margin-left: 1%;
        margin-right: 1%;
    }

    .body #todo-list {
        font-size: 2vh;
    }
</style>
