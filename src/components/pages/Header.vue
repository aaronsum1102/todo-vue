<template>
    <div class="header">
        <Title message-on-left="To" message-on-right="Do" />
    </div>
</template>

<script>
import Title from '../molecules/Title.vue'

export default {
  name: 'Header',
  components: {
    Title
  }
}
</script>

<style scoped>
    .header {
        color: #FFFFFF;
        background-color: skyblue;
        padding: 5px;
        font-size: 5vh;
    }
</style>
