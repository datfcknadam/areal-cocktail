<template>
  <div>
    <b-dropdown-item
      v-for="value in dropdownItemSortBy"
      :text="value.name"
      :key="value.id"
      href="#"
      @click="inputSortBy(value.value)"
    />
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
