<template>
    <p>{{description}}</p>
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
