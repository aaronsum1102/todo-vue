<template>
  <div class="todos-body">
    <p>
      <alert-message
        v-if="alert.displayAlert"
        :message="alert.message" />
    </p>
    <p>
      <input-form />
    </p>
    <p>
      <Todos :items="getTodos"/>
    </p>
    <Summary
      :description="summrayDescription"
      :value="taskToDo" />
    <Button class="button" :displayIcon="displayIcon" iconName="trash" message="clear all tasks" @clicked="clearTodos" />
  </div>
</template>

<script>
import Todos from '../organisms/ItemsList.vue'
import InputForm from '../molecules/InputForm.vue'
import AlertMessage from '../molecules/AlertMessage.vue'
import Summary from '../atoms/BaseSummary.vue'
import Button from '../atoms/BaseButton.vue'
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'TodosBody',
  data: function () {
    return {
      summrayDescription: 'Total tasks to do',
      displayIcon: true
    }
  },
  components: {
    Todos,
    InputForm,
    AlertMessage,
    Summary,
    Button
  },
  computed: {
    ...mapState('todoStore', [
      'alert'
    ]),
    ...mapGetters('todoStore', [
      'taskToDo',
      'getTodos'
    ])
  },
  methods: {
    clearTodos () {
      const confirmation = confirm('Are you sure you want to clear all tasks? Tasks deleted can not be recover.')
      if (confirmation) {
        this.$store.dispatch('todoStore/clearTodos')
      }
    }
  }
}
</script>

<style scoped>
.todos-body {
  font-size: 2vh;
}
.button {
  border: 2px solid;
  border-radius: 10px;
  font-size: inherit
}
</style>
