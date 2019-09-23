<template>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <router-link to="/">
      <b-navbar-brand tag="h1" class="mb-4">Cocktail</b-navbar-brand>
    </router-link>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <Search />
          <b-collapse id="collapse-1" class="mt-2">
            <dropdown
              v-for="(dropdown, key) in dropdowns"
              :text="dropdown.text"
              :itemsKey="key"
              :key="key"
              :item="dropdown.items"
            />
            <b-button
              variant="dark"
              right
              @click="CLEAR_FILTER(), change()"
            >Сбросить фильтр</b-button>
          </b-collapse>
          <b-nav-item-dropdown variant="dark" class="m-2" text="Сортировать" right>
            <DropdownItemSortBy/>
          </b-nav-item-dropdown>
        </b-nav-form>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import Search from './Search.vue';
import Dropdown from './Dropdown.vue';
import DropdownItemSortBy from './DropdownItemSortBy.vue';

export default {
  components: {
    Search,
    Dropdown,
    DropdownItemSortBy,
  },
  computed: mapState({
    dropdowns: state => state.navbar.dropdownFilter,
  }),
  methods: {
    ...mapMutations('navbar', [
      'CLEAR_FILTER',
    ]),
    change() {
      if (this.$route.params.id) {
        this.$router.push({ name: 'content' });
      }
      this.$store.dispatch('navbar/loadCocktails');
    },
  },
};
</script>
