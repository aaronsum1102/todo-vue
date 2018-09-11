<template>
    <div class="title">
        <span id="message">{{messageOnLeft}}</span>
        <font-awesome-icon id="icon" icon="list-ul"/>
        <span id="message">{{messageOnRight}}</span>
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
    #message {
        padding: 10px;
        align-items: center;
    }
    .title{
      font-size: 2em;
    }
</style>
