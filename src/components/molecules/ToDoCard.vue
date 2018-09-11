<template>
    <div class="card">
        <input type="checkbox">
        <label>
            <ToDoDescription :description="description" />
        </label>
    </div>
</template>

<script>
import ToDoDescription from '../atoms/ToDoDescription.vue'

export default {
  name: 'ToDoCard',
  props: {
    description: {
      type: String,
      required: true
    }
  },
  components: {
    ToDoDescription
  }
}
</script>

<style>
    input {
        margin-left: 5%;
    }
    label {
        display: inline-block;
        margin-left: 5px;
    }
    .card {
        margin-left: 1%;
        margin-right: 1%;
        margin-top: 2%;
        border: 2px solid;
        border-radius: 10px;
        border-color: skyblue;
    }
</style>
