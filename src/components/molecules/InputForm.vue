<template>
    <div class="input-form">
        <base-input-text class="input" placeholder="write your new task here..." />
        <button class="button">
                    <font-awesome-icon id="icon" icon="plus"/> add
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

    .input-form .input {
        border-color: grey;
        border: 2px solid;
        border-radius: 5px;
        flex: 1;
        padding: 5px;
        font-size: inherit;
    }

    .input-form .button {
        border: 2px solid;
        border-radius: 10px;
        margin-left: 1%;
        font-size: inherit;
    }
</style>
