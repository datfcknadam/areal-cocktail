<template>
  <div id="search">
    <b-form-input size="sm"
      :placeholder="infoPlaceholder"
      class="mr-sm-2"
      @input="SET_SEARCH"
      />
    <b-button v-b-toggle.collapse-1 variant="dark" right
    >Фильтровать</b-button>
  </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex';

export default {
  methods: mapMutations('navbar', [
    'SET_SEARCH',
  ]),
  computed: mapState('navbar', {
    infoPlaceholder: state => state.placeholder,
  }),

};
</script>
<style scoped>
v-b-toggle.collapse-1{
  margin-left: 10vh;
}
</style>
