<template>
    <div class="body">
        <p>
            <alert-message v-if="indicator.toDisplay" message="placeholder text..." />
        </p>
        <p>
            <input-form />
        </p>
        <p>
            <to-do-list />
        </p>
        <base-summary-message />
    </div>
</template>

<script>
import ToDoList from '../organisms/ToDoList.vue'
import InputForm from '../molecules/InputForm.vue'
import AlertMessage from '../molecules/AlertMessage.vue'
import BaseSummaryMessage from '../atoms/BaseSummaryMessage.vue'

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
    AlertMessage,
    BaseSummaryMessage
  }
}
</script>
