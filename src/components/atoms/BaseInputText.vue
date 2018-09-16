<template>
  <input type="text" v-model="instanceValue" />
</template>

<script>
export default {
  name: 'InputText',
  computed: {
    instanceValue: {
      get () {
        return this.$store.state.todoForm.description
      },
      set (value) {
        this.$store.commit('updateTodoForm', value)
      }
    }
  }
}
</script>
