<template>
  <b-nav-dropdown lazy="true" :text="text" class="m-md-2">
    <b-dropdown-item
      v-for="value in item"
      href="#"
      v-text="value.name"
      :key="itemsKey+ '-' + value.id"
      @click="SET_FILTER({ itemsKey, value }), change()"
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
  methods: {
    ...mapMutations('navbar', [
      'SET_FILTER',
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
