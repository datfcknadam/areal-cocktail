<template>
  <div>
    <b-dropdown-item
      v-for="value
      in dropdownItemAlco"
      :key="'alco-' + value.id"
      @click="inputAlco(value.value)"
      href="#"
    >{{value.name}}</b-dropdown-item>
  </div>
</template>
<script>
import jsonDropdownItemAlco from '../static/assets/json/dropdownItemAlco.json';

export default {
  data() {
    return {
      dropdownItemAlco: jsonDropdownItemAlco.data,
    };
  },
  methods: {
    inputAlco(value) {
      this.$emit('alco', value);
    },
  },
};

</script>
