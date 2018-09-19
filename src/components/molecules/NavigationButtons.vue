<template>
  <div class="navigation-buttons">
    <router-link to="/" class="container-size margin-right">
      <Button class="button" :display-icon="displayIcon" message="Tasks to do"/>
    </router-link>
    <router-link to="/done" class="container-size margin-left">
      <Button class="button" :display-icon="displayIcon" message="Tasks done" />
    </router-link>
  </div>
</template>

<script>
import Button from '../atoms/BaseButton.vue'
export default {
  name: 'NavigationButton',
  data: function () {
    return {
      displayIcon: false
    }
  },
  components: {
    Button
  }
}
</script>

<style scoped>
.navigation-buttons{
  padding:5px;
  display: flex;
  background: skyblue;
}
.margin-left{
  margin-left: 5px;
}
.margin-right{
  margin-right: 5px;
}
.container-size{
  color: white;
  border: 3px solid;
  border-radius: 10px;
  background: skyblue;
  flex-grow: 1;
}
.button {
  width: 100%;
  font-size: inherit;
  color:white;
}
</style>
