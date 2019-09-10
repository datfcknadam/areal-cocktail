<template>
  <b-nav-dropdown lazy="true" :text="text" class="m-md-2">
    <b-dropdown-item
      v-for="value in item"
      v-text="value.name"
      :key="itemsKey + value.id"
      href="#"
      @click="click(value.value)"
    />
  </b-nav-dropdown>
</template>
<script>

export default {
  name: 'Dropdown',
  props: {
    text: String,
    item: {
      type: Array,
    },
    itemsKey: String,
  },
  data() {
    return {
    };
  },
  methods: {
    click(value) {
      this.$emit('click', value);
    },
  },
};

</script>
