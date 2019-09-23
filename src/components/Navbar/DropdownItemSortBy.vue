<template>
  <div>
    <b-dropdown-item
      v-for="value in dropdownItemSortBy"
      href="#"
      v-text="value.name"
      :key="'sort-' + value.id"
      @click="SET_SORT(value.value), change()"
    />
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  computed: mapState('navbar', {
    dropdownItemSortBy: state => state.dropdownSort,
    sortKey: state => state.sortKey,
  }),
  methods: {
    ...mapMutations('navbar', [
      'SET_SORT',
    ]),
    change() {
      if (this.$route.params.id) {
        this.$router.push({ name: 'content' });
      }
      this.$store.dispatch('navbar/loadCocktails');
    },
  },
};
</script>
