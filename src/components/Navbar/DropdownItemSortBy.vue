<template>
  <div>
    <b-dropdown-item
      v-for="value in dropdownItemSortBy"
      v-text="value.name"
      :key="'sort-' + value.id"
      href="#"
      @click="SET_SORT(value.value)"
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
    'SET_SORT',
  ]),

};
</script>
