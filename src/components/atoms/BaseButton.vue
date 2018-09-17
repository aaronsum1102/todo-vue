<template>
    <button class="button" @click="$emit('clicked')">
        {{ message }}
    </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    message: {
      type: String,
      required: true
    }
  }
}
</script>
