<template>
  <div>
    <b-dropdown-item
      v-for="value
      in dropdownItemSortBy"
      :key="'sort-' + value.id"
      @click="inputSortBy(value.value)"
      href="#"
    >{{value.name}}</b-dropdown-item>
  </div>
</template>
<script>
import jsonDropdownItemSortBy from '../static/assets/json/dropdownItemSortBy.json';

export default {
  data() {
    return {
      dropdownItemSortBy: jsonDropdownItemSortBy.data,
    };
  },
  methods: {
    inputSortBy(inputValue) {
      this.$emit('sortBy', inputValue);
    },
  },

};
</script>
