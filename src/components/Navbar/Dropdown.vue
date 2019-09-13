<template>
  <b-nav-dropdown lazy="true" :text="text" class="m-md-2">
    <b-dropdown-item
      v-for="value in item"
      v-text="value.name"
      :key="itemsKey+ '-' + value.id"
      href="#"
      @click="setFilter({ itemsKey, value })"
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
  data() {
    return {
      valueItem: null,
    };
  },
  methods: mapMutations('navbar', [
    'setFilter',
  ]),
};

</script>
