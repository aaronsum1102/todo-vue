<template>
  <input type="text" v-model="instanceValue" />
</template>

<script>
export default {
  name: 'InputText',
  computed: {
    instanceValue: {
      get () {
        return this.$store.state.todoStore.todoForm
      },
      set (value) {
        this.$store.dispatch('todoStore/updateTodoForm', value)
      }
    }
  }
}
</script>
