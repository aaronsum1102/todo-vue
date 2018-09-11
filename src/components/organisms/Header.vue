<template>
    <div class="header">
        <Title id="title" message-on-left="To" message-on-right="Do" />
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
        text-align: center;
    }
</style>
