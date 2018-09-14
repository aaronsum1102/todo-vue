<template>
    <div class="input-form">
        <base-input-text class="input font-size"
          placeholder="write your new task here..." />
        <button class="button font-size">
            <font-awesome-icon icon="plus" /> add
        </button>
    </div>
</template>

<script>
import BaseInputText from '../atoms/BaseInputText.vue'

export default {
  name: 'InputForm',
  components: {
    BaseInputText
  }
}
</script>

<style scoped>
.input-form {
  display: flex;
}
.font-size {
  font-size: 2vh;
}
.input {
  border-color: grey;
  border: 2px solid;
  border-radius: 5px;
  flex: 1;
  padding: 5px;
}
.button {
  border: 2px solid;
  border-radius: 10px;
  margin-left: 1%;
}
</style>
