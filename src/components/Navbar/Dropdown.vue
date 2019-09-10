<template>
  <b-nav-dropdown :text="text" class="m-md-2">
    <!--Сортировка директивы -> атрибуты -> бинды -> ивенты -->
    <b-dropdown-item
      v-for="value in items"
      v-text="value.name"
      href="#"
      :key="itemsKey + value.id"
      @click="click(value.value)"
    />
  </b-nav-dropdown>
</template>

<script>
  export default {
    name: "Dropdown",
    props: {
      text: String,
      items: {
        type: Array,
      },
      itemsKey: String,
    },
    methods: {
      click(value) {
        this.$emit('click', value);
      }
    }
  }
</script>

<style scoped>

</style>