<template>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand tag="h1" class="mb-4">Cocktail</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <Search @search="inputChanged"/>
            <b-collapse id="collapse-1" class="mt-2">
              <dropdown
                v-for="(dropdown, key) in dropdowns"
                :text="dropdown.text"
                :itemsKey="key"
                :key="key"
                :item="dropdown.item"
                @click="click(key, $event)"
              />
              <b-button
                variant="dark"
                @click="cancelFilter"
                right
            >Сбросить фильтр</b-button>
            </b-collapse>
            <b-nav-item-dropdown variant="dark" class="m-2" text="Сортировать" right>
              <DropdownItemSortBy @sortBy="inputSortBy"/>
            </b-nav-item-dropdown>
        </b-nav-form>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import Search from './Search.vue';
import Dropdown from './Dropdown.vue';
import DropdownItemSortBy from './DropdownItemSortBy.vue';
import jsonDropdownItem from '../static/assets/json/dropdownItem.json';

export default {
  components: {
    Search,
    Dropdown,
    DropdownItemSortBy,
  },
  data() {
    return {
      dropdowns: {
        alco: {
          text: 'Крепкость',
          item: jsonDropdownItem.alco,
        },
        color: {
          text: 'Цвет',
          item: jsonDropdownItem.color,
        },
        taste: {
          text: 'Вкус',
          item: jsonDropdownItem.taste,
        },
      },
    };
  },
  computed: {},
  methods: {
    click(type, event) {
      this.$emit(type, event);
    },
    inputChanged(search) {
      this.$emit('search', search);
    },
    cancelFilter() {
      this.$emit('removeFilter', true);
    },
    inputSortBy(value) {
      this.$emit('sortBy', value);
    },
  },
};
</script>
