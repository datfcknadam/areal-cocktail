<template>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand tag="h1" class="mb-4">Cocktail</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input
            size="sm"
            v-model="search"
            class="mr-sm-2"
            :placeholder="placeholder" @input="inputChanged"
          />
          <b-button
            v-b-toggle.collapse-1
            variant="dark"
            style="margin-left: 10vh;"
            right
          >Фильтровать</b-button>
          <b-collapse id="collapse-1" class="mt-2">
            <b-nav-dropdown id="dropdown-1" lazy="true" text="Вкус" class="m-md-2">
              <b-dropdown-item v-for="value in dropdownItemTaste"
                :key="'taste-' + value.id"
                @click="inputTaste(value.value)"
                href="#"
              >{{value.name}}</b-dropdown-item>
            </b-nav-dropdown>
            <b-nav-dropdown id="dropdown-1" text="Цвет" class="m-md-2">
              <b-dropdown-item v-for="value in dropdownItemColor"
              :key="'color-' + value.id"
              @click="inputColor(value.value)" href="#"
              >{{value.name}}</b-dropdown-item>
            </b-nav-dropdown>
            <b-nav-dropdown id="dropdown-1" text="Градус" class="m-md-2">
              <b-dropdown-item v-for="value in dropdownItemAlco"
                :key="'alco-' + value.id"
                @click="inputAlco(value.value)"
                href="#"
              >{{value.name}}</b-dropdown-item>
            </b-nav-dropdown>
            <b-button
              variant="dark"
              @click="cancelFilter"
              right
            >Сбросить фильтр</b-button>
          </b-collapse>
          <b-nav-item-dropdown variant="dark" class="m-2" text="Сортировать" right>
            <b-dropdown-item
              v-for="value in dropdownItemSortBy"
              :key="'sort-' + value.id"
              @click="inputSortBy(value.value)" href="#"
            >{{value.name}}
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-nav-form>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import jsonDropdownItemSortBy from '../static/assets/json/dropdownItemSortBy.json';
import jsonDropdownItemTaste from '../static/assets/json/dropdownItemTaste.json';
import jsonDropdownItemAlco from '../static/assets/json/dropdownItemAlco.json';
import jsonDropdownItemColor from '../static/assets/json/dropdownItemColor.json';

export default {

  data() {
    return {
      dropdownItemSortBy: jsonDropdownItemSortBy.data,
      dropdownItemTaste: jsonDropdownItemTaste.data,
      dropdownItemAlco: jsonDropdownItemAlco.data,
      dropdownItemColor: jsonDropdownItemColor.data,
      search: null,
      placeholder: 'Текила...',
    };
  },
  computed: {},
  methods: {
    inputChanged() {
      this.$emit('search', this.search);
    },
    cancelFilter() {
      this.$emit('removeFilter', true);
    },
    inputTaste(value) {
      this.$emit('taste', value);
    },
    inputAlco(value) {
      this.$emit('alco', value);
    },
    inputColor(value) {
      this.$emit('color', value);
    },
    inputSortBy(value) {
      this.$emit('sortBy', value);
    },
  },
  watch: {
    sortBy(newSortBy) {
      localStorage.sortBy = newSortBy;
    },
    filterByColor(newFilterByColor) {
      localStorage.filterByColor = newFilterByColor;
    },
    filterByTaste(newFilterByTaste) {
      localStorage.filterByTaste = newFilterByTaste;
    },
    filterByAlco(newFilterByAlco) {
      localStorage.filterByAlco = newFilterByAlco;
    },
  },
  mounted() {
    if (localStorage.sortBy) {
      this.sortBy = localStorage.sortBy;
    }
    if (localStorage.filterByColor || localStorage.filterByTaste || localStorage.filterByAlco) {
      this.filterByTaste = localStorage.filterByTaste;
      this.filterByAlco = localStorage.filterByAlco;
      this.filterByColor = localStorage.filterByColor;
    }
  },
};
</script>
