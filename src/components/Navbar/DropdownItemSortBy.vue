<template>
  <div>
    <b-dropdown-item
      v-for="value in dropdownItemSortBy"
      v-text="value.name"
      :key="'sort-' + value.id"
      href="#"
      @click="setSort(value.value)"
    />
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex';


export default {
  computed: mapState({
    dropdownItemSortBy: state => state.navbar.dropdownSort,
  }),
  methods: mapMutations('navbar', [
    'setSort',
  ]),

};
</script>
