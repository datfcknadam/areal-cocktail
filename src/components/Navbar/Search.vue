<template>
  <div id="search">
    <b-form-input size="sm"
      v-model="search"
      :placeholder="infoPlaceholder"
      class="mr-sm-2"
      @input="inputChanged"
      />
    <b-button v-b-toggle.collapse-1 variant="dark" right
    >Фильтровать</b-button>
  </div>
</template>
<script>
export default {
  props: {
    infoPlaceholder: String,
  },
  data() {
    return {
      search: null,
    };
  },
  methods: {
    inputChanged() {
      this.$emit('search', this.search);
    },
  },

};
</script>
<style scoped>
v-b-toggle.collapse-1{
  margin-left: 10vh;
}
</style>
