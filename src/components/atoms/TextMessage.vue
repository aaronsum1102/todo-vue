<template>
  <div> {{description}}</div>
</template>

<script>
export default {
  name: 'TextMessage',
  props: {
    description: {
      type: String,
      required: true
    }
  }
}
</script>
