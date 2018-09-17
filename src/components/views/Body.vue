<template>
  <div class="body">
    <p>
      <alert-message
        v-if="this.$store.state.alert.displayAlert"
        :message="this.$store.state.alert.message" />
    </p>
    <p>
      <input-form />
    </p>
    <p>
      <to-do-list />
    </p>
    <base-summary-message
      :task-to-do="taskToDo"
      :task-completed="taskCompleted" />
    <base-button class="button" message="clear all tasks" @clicked="clearTodos" />
  </div>
</template>

<script>
import ToDoList from '../organisms/ToDoList.vue'
import InputForm from '../molecules/InputForm.vue'
import AlertMessage from '../molecules/AlertMessage.vue'
import BaseSummaryMessage from '../atoms/BaseSummaryMessage.vue'
import BaseButton from '../atoms/BaseButton.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'Body',
  components: {
    ToDoList,
    InputForm,
    AlertMessage,
    BaseSummaryMessage,
    BaseButton
  },
  computed: mapGetters([
    'taskToDo',
    'taskCompleted'
  ]),
  methods: {
    clearTodos () {
      const confirmation = confirm('Are you sure you want to clear all tasks? Tasks deleted can not be recover.')
      if (confirmation) {
        this.$store.dispatch('clearTodos')
      }
    }
  }
}
</script>

<style button>
.button {
  border: 2px solid;
  border-radius: 10px;
  margin-left: 1%;
  font-size: inherit
}
</style>
