<template>
    <div>
        <span id="message">{{messageOnLeft}}</span>
        <image-button/>
        <span id="message">{{messageOnRight}}</span>
    </div>
</template>

<script>
import ImageButton from '../atoms/ImageButton.vue'

export default {
  name: 'Title',
  props: {
    messageOnLeft: {
      type: String
    },
    messageOnRight: {
      type: String
    }
  },
  components: {
    ImageButton
  }
}
</script>

<style>
    #message {
        padding: 5px;
        align-items: center;
        font-size: 5vh;
    }
</style>
