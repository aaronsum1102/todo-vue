<template>
  <p>
    <Todo :message="getMessage"/>
  </p>
</template>

<script>
import Todo from '../atoms/TextMessage.vue'
import { mapState } from 'vuex'

export default {
  name: 'TodoItemView',
  components: {
    Todo
  },
  computed: {
    ...mapState('todoStore', [
      'todos'
    ]),
    getMessage () {
      const { id } = this.$route.params
      return this.todos[id].description
    }
  }
}
</script>
