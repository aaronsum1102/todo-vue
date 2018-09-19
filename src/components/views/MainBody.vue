<template>
  <div class="todos-body">
    <navigation class="navigation-bar"/>
    <p>
      <alert-message
        v-if="alert.displayAlert"
        :message="alert.message" />
    </p>
    <p>
      <input-form />
    </p>
    <router-view />
    <Button class="button" :displayIcon="displayIcon" iconName="trash" message="clear all tasks" @clicked="clearTodos" />
  </div>
</template>

<script>

import InputForm from '../molecules/InputForm.vue'
import AlertMessage from '../molecules/AlertMessage.vue'

import Button from '../atoms/BaseButton.vue'
import Navigation from '../molecules/NavigationButtons.vue'
import { mapState } from 'vuex'

export default {
  name: 'MainBody',
  data: function () {
    return {
      displayIcon: true
    }
  },
  components: {
    InputForm,
    AlertMessage,
    Button,
    Navigation
  },
  computed: {
    ...mapState('todoStore', [
      'alert'
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
.navigation-bar{
  margin-top: 1%;
  font-size: 2.5vh;
}
</style>
