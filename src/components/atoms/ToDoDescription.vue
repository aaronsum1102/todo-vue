<template>
  <div> {{description}}</div>
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
