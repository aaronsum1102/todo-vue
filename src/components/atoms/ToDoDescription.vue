<template>
    <h3>{{description}}</h3>
</template>

<script>
export default {
  name: 'ToDoDescription',
  props: {
    description: {
      type: String,
      required: true
    }
  }
}
</script>

<style>
h3 {
  margin: 5%;
}
</style>
