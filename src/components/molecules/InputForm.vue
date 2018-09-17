<template>
    <div class="input-form">
        <base-input-text class="input font-size"
          placeholder="write your new task here..."
          :value="todoForm"
          @inputChanged="updataForm" />
        <button class="button font-size"
          @click= addTodo >
            <font-awesome-icon icon="plus" /> add
        </button>
    </div>
</template>

<script>
import BaseInputText from '../atoms/BaseInputText.vue'
import { mapState } from 'vuex'

export default {
  name: 'InputForm',
  state: {
    number: 0
  },
  components: {
    BaseInputText
  },
  computed: {
    ...mapState('todoStore', ['todoForm'])
  },
  methods: {
    updataForm (payload) {
      this.$store.dispatch('todoStore/updateTodoForm', payload)
    },
    addTodo () {
      this.$store.dispatch('todoStore/addTodo')
      this.$store.dispatch('todoStore/updateTodoForm', '')
    }
  }
}
</script>

<style scoped>
.input-form {
  display: flex;
}
.font-size {
  font-size: 2vh;
}
.input {
  border-color: grey;
  border: 2px solid;
  border-radius: 5px;
  flex: 1;
  padding: 5px;
}
.button {
  border: 2px solid;
  border-radius: 10px;
  margin-left: 1%;
}
</style>
v:on
