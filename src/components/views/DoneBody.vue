<template>
  <div class="done-items">
    <p>
      <done-items :items="getDone"/>
    </p>
    <Summary :description="summaryDescription" :value="taskCompleted" />
  </div>
</template>

<script>
import DoneItems from '../organisms/ItemsList.vue'
import Summary from '../atoms/BaseSummary.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'DoneBody',
  data: function () {
    return {
      summaryDescription: 'Total tasks done',
      value: 100
    }
  },
  components: {
    DoneItems,
    Summary
  },
  computed: {
    ...mapGetters('todoStore', [
      'taskCompleted',
      'getDone'
    ])
  }
}
</script>

<style scoped>
.done-items {
  font-size:2vh;
}
</style>
