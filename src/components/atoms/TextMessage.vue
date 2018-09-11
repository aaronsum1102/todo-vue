<template>
  <div> {{message}}</div>
</template>

<script>
export default {
  name: 'TextMessage',
  props: {
    message: {
      type: String,
      required: true
    }
  }
}
</script>
