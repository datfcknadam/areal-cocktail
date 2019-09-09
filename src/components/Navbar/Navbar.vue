<template>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand tag="h1" class="mb-4">Cocktail</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <Search @search="inputChanged"/>
            <b-collapse id="collapse-1" class="mt-2">
              <b-nav-dropdown id="dropdown-1" lazy="true" text="Вкус" class="m-md-2">
              <DropdownItemTaste @taste="inputTaste"/>
              </b-nav-dropdown>
              <b-nav-dropdown id="dropdown-1" text="Цвет" class="m-md-2">
                <DropdownItemColor @color="inputColor"/>
              </b-nav-dropdown>
              <b-nav-dropdown id="dropdown-1" text="Градус" class="m-md-2">
                <DropdownItemAlco @alco="inputAlco"/>
              </b-nav-dropdown>
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
import DropdownItemTaste from './DropdownItemTaste.vue';
import DropdownItemAlco from './DropdownItemAlco.vue';
import DropdownItemColor from './DropdownItemColor.vue';
import DropdownItemSortBy from './DropdownItemSortBy.vue';

export default {
  components: {
    Search,
    DropdownItemTaste,
    DropdownItemColor,
    DropdownItemAlco,
    DropdownItemSortBy,
  },
  data() {
    return {
    };
  },
  computed: {},
  methods: {
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
