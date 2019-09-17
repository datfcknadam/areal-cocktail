<template>
  <b-nav-dropdown lazy="true" :text="text" class="m-md-2">
    <b-dropdown-item
      v-for="value in item"
      v-text="value.name"
      :key="itemsKey+ '-' + value.id"
      href="#"
      @click="SET_FILTER({ itemsKey, value })"
    />
  </b-nav-dropdown>
</template>
<script>
import { mapMutations } from 'vuex';

export default {
  name: 'Dropdown',
  props: {
    text: String,
    item: {
      type: Array,
    },
    itemsKey: String,
  },
  methods: mapMutations('navbar', [
    'SET_FILTER',
  ]),
};

</script>
