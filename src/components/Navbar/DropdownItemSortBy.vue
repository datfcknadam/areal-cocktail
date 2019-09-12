<template>
  <div>
    <b-dropdown-item
      v-for="value in dropdownItemSortBy"
      v-text="value.name"
      :key="'sort-' + value.id"
      href="#"
      @click="inputSortBy(value.value)"
    />
  </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  computed: mapState({
    dropdownItemSortBy: state => state.navbar.dropdownSort,
  }),

};
</script>
