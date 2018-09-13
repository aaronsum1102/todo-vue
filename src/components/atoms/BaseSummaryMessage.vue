<template>
  <p class="summary">
    <span id="summary-title"><b>Summary</b></span><br/> Number of task to do: <strong>{{taskToDo}}</strong><br/> Number of task done: <strong>{{taskCompleted}}</strong>
  </p>
</template>

<script>
export default {
  name: 'BaseSummaryMessage',
  props: {
    taskCompleted: {
      type: Number,
      defaultStatus: 0
    },
    taskToDo: {
      type: Number,
      defaultStatus: 0
    }
  }
}
</script>

<style scoped>
  .summary {
    line-height: 1.6;
  }
</style>
