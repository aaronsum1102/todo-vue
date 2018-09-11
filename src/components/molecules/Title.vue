<template>
  <div class="title">
    <span class="message">
      {{messageOnLeft}} <font-awesome-icon id="icon" icon="list-ul" /> {{messageOnRight}}
    </span>
  </div>
</template>

<script>
export default {
  name: 'Title',
  props: {
    messageOnLeft: {
      type: String
    },
    messageOnRight: {
      type: String
    }
  }
}
</script>

<style scoped>
  .title {
    display:flex;
    justify-content: center;
  }
    .title .message {
    padding: 5px;
  }
</style>
