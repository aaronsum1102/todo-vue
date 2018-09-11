<template>
    <div class="summary">
        <span id="section-title"><b>Summary</b></span><br/>
        Number of task to do: <b>{{taskToDo}}</b><br/>
        Cumulative number of task done: <b>{{taksCompleted}}</b>
    </div>
</template>

<script>
export default {
  name: 'Summary',
  props: {
    taksCompleted: {
      type: Number,
      default: 0
    },
    taskToDo: {
      type: Number,
      default: 0
    }
  }
}
</script>
