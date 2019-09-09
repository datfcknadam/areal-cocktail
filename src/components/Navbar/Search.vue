<template>
  <div id="search">
    <b-form-input size="sm"
      v-model="search"
      @input="inputChanged"
      :placeholder="placeholder"
      class="mr-sm-2"
      />
    <b-button v-b-toggle.collapse-1
      variant="dark"
      style="margin-left: 10vh;" right
    >Фильтровать</b-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      search: null,
      placeholder: 'Текила...',
    };
  },
  methods: {
    inputChanged() {
      this.$emit('search', this.search);
    },
  },

};
</script>
