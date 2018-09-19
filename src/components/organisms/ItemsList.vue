<template>
  <div class="items-list">
    <items-list-item class="item"
      v-for="item in items"
      v-bind:key="item.id"
      :item="item"/>
  </div>
</template>

<script>
import ItemsListItem from '../molecules/ItemsListItem.vue'

export default {
  name: 'ItemsList',
  components: {
    ItemsListItem
  },
  props: {
    items: {
      type: Array,
      required: true
    }
  }
}
</script>
