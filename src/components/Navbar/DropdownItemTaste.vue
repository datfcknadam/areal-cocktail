<template>
  <div>
    <b-dropdown-item
      v-for="value
      in dropdownItemTaste"
      :key="'taste-' + value.id"
      @click="inputTaste(value.value)"
      href="#"
    >{{value.name}}</b-dropdown-item>
  </div>
</template>
<script>
import jsonDropdownItemTaste from '../static/assets/json/dropdownItemTaste.json';

export default {
  data() {
    return {
      dropdownItemTaste: jsonDropdownItemTaste.data,
    };
  },
  methods: {
    inputTaste(value) {
      this.$emit('taste', value);
    },
  },

};

</script>
