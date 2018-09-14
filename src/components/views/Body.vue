<template>
  <div class="body">
    <p>
      <alert-message
        v-if="indicator.toDisplay"
        message="placeholder text..." />
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
  </div>
</template>

<script>
import ToDoList from '../organisms/ToDoList.vue'
import InputForm from '../molecules/InputForm.vue'
import AlertMessage from '../molecules/AlertMessage.vue'
import BaseSummaryMessage from '../atoms/BaseSummaryMessage.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'Body',
  data () {
    return {
      indicator: {
        toDisplay: true
      }
    }
  },
  components: {
    ToDoList,
    InputForm,
    AlertMessage,
    BaseSummaryMessage
  },
  computed: mapGetters([
    'taskToDo',
    'taskCompleted'
  ])
}
</script>
