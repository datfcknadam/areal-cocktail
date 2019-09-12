<template>
  <b-nav-dropdown lazy="true" :text="text" class="m-md-2">
    <b-dropdown-item
      v-for="value in item"
      v-text="value.name"
      :key="itemsKey+ '-' + value.id"
      href="#"
      @click="changeFilter(item, value.value)"
    />
  </b-nav-dropdown>
</template>
<script>
import { mapActions } from 'vuex';

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
    };
  },
  methods: mapActions('navbar', [
    'changeFilter',
  ]),
};

</script>
