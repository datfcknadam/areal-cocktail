<template>
  <div id="search">
    <b-form-input size="sm"
      :placeholder="infoPlaceholder"
      class="mr-sm-2"
      @input="searchValue"
      />
    <b-button v-b-toggle.collapse-1 variant="dark" right
    >Фильтровать</b-button>
  </div>
</template>
<script>
import { mapMutations } from 'vuex';

export default {
  props: {
    infoPlaceholder: String,
  },
  data() {
    return {
      search: null,
    };
  },
  methods: mapMutations('navbar', [
    'searchValue',
  ]),

};
</script>
<style scoped>
v-b-toggle.collapse-1{
  margin-left: 10vh;
}
</style>
