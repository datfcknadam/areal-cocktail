<template>
  <div>
    <b-dropdown-item
      v-for="value
      in dropdownItemColor"
      :key="'color-' + value.id"
      @click="inputColor(value.value)"
      href="#"
    >{{value.name}}</b-dropdown-item>
  </div>
</template>
<script>
import jsonDropdownItemColor from '../static/assets/json/dropdownItemColor.json';

export default {
  data() {
    return {
      dropdownItemColor: jsonDropdownItemColor.data,
    };
  },
  methods: {
    inputColor(value) {
      this.$emit('color', value);
    },
  },
};

</script>
