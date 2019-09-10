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
              :items="dropdown.items"
              @click="click(key, $event)"
            />
            <b-button
              variant="dark"
              @click="cancelFilter"
              right
            >Сбросить фильтр
            </b-button>
          </b-collapse>
          <b-nav-item-dropdown variant="dark" class="m-2" text="Сортировать" right>
            <dropdown-item-sort-by @sortBy="inputSortBy"/>
          </b-nav-item-dropdown>
        </b-nav-form>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
  import Search from './Search.vue';
  import DropdownItemTaste from './DropdownItemTaste.vue';
  import DropdownItemAlco from './DropdownItemAlco.vue';
  import DropdownItemColor from './DropdownItemColor.vue';
  import DropdownItemSortBy from './DropdownItemSortBy.vue';
  import Dropdown from './Dropdown.vue';

  import jsonDropdownItemTaste from '../static/assets/json/dropdownItemTaste.json';
  import jsonDropdownItemColor from '../static/assets/json/dropdownItemColor.json';
  import jsonDropdownItemAlco from '../static/assets/json/dropdownItemAlco.json';

  export default {
    components: {
      Search,
      Dropdown,
      DropdownItemTaste,
      DropdownItemColor,
      DropdownItemAlco,
      DropdownItemSortBy,
    },
    data() {
      return {
        dropdowns: {
          alco: {
            items: jsonDropdownItemAlco.data,
            text: 'Алкоголь',
          },
          taste: {
            items: jsonDropdownItemTaste.data,
            text: 'Taste',
          },
        },
      };
    },
    computed: {},
    methods: {
      click(type, event) {
        switch (type) {
          case 'alco':
            this.inputAlco(event);
            break;
          case 'taste':
            this.inputTaste(event);
            break;
        }
      },
      inputChanged(search) {
        this.$emit('search', search);
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
  };
</script>
