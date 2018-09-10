<template>
  <div id="container">
    <h1 id= "message">{{ message }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Container',
  props: {
    message: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
#container {
  background: skyblue;
}
#message {
  text-align: center;
  color: #ffffff;
  font-family: Arial, Helvetica, sans-serif;
  padding: 5px;
}
</style>
