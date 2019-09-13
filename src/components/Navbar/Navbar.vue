<template>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand tag="h1" class="mb-4">Cocktail</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <Search :infoPlaceholder="infoPlaceholder" @search="inputChanged"/>
            <b-collapse id="collapse-1" class="mt-2">
              <dropdown
                v-for="(dropdown, key) in dropdowns"
                :text="dropdown.text"
                :itemsKey="key"
                :key="key"
                :item="dropdown.item"
              />
              <b-button
                variant="dark"
                @click="cancelFilter"
                right
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
import { mapState, mapGetters, mapMutations } from 'vuex';
import Search from './Search.vue';
import Dropdown from './Dropdown.vue';
import DropdownItemSortBy from './DropdownItemSortBy.vue';


export default {
  components: {
    Search,
    Dropdown,
    DropdownItemSortBy,
  },
  props: {
    infoPlaceholder: String,
  },
  computed: mapState({
    dropdowns: state => state.navbar.dropdownsFilter,
  }),
};
</script>
