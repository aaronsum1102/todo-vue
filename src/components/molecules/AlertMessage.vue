<template>
    <div class="alert-message">
        <font-awesome-icon id="icon" icon="exclamation-triangle" />
        <message id="message" :message="message" />
    </div>
</template>

<script>
import Message from '../atoms/TextMessage.vue'

export default {
  name: 'AlertMessage',
  props: {
    message: {
      type: String,
      required: true
    }
  },
  components: {
    Message
  }
}
</script>

<style scoped>
    .alert-message {
        display: flex;
        font-size: 2.5vh;
        color: red;
    }

    .alert-message #icon {
        margin-right: 1%;
        align-self: center;
    }

    .alert-message #classmessage {
        flex: 1;
    }
</style>
git
