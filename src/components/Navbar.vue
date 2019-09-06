<template>
    <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand tag="h1" class="mb-4" >Cocktail</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
            <b-nav-form>
                    <b-form-input size="sm" @input="search_text()"
                    v-model="search"
                    class="mr-sm-2"
                    :placeholder="placeholder"></b-form-input>
                    <b-button  v-b-toggle.collapse-1
                     variant="dark" style="margin-left: 10vh;" right>Фильтровать</b-button>
                    <b-collapse id="collapse-1" class="mt-2">
                        <b-nav-dropdown id="dropdown-1"  lazy="true" text="Вкус" class="m-md-2">
                            <b-dropdown-item v-for = "value in dropdownItemTaste"
                            :key="value.id"
                            @click="filterByTaste = value.value"
                            href="#">{{value.name}}</b-dropdown-item>
                        </b-nav-dropdown>
                        <b-nav-dropdown id="dropdown-1" text="Цвет" class="m-md-2">
                            <b-dropdown-item v-for="value in dropdownItemColor"
                            :key="value.id"
                            @click="filterByColor = value.value"
                            href="#">{{value.name}}</b-dropdown-item>
                        </b-nav-dropdown>
                        <b-nav-dropdown id="dropdown-1" text="Градус" class="m-md-2">
                            <b-dropdown-item v-for="value in dropdownItemAlco"
                            :key="value.id"
                            @click="filterByAlco = value.value"
                            href="#">{{value.name}}</b-dropdown-item>
                        </b-nav-dropdown>
                        <b-button  variant="dark"
                        @click="filterByAlco = '',
                        filterByColor = '',
                        filterByTaste = '',
                        placeholder = 'Текила...'"
                        right>Сбросить фильтр</b-button>
                    </b-collapse>
            <b-nav-item-dropdown variant="dark" class="m-2" text="Сортировать" right>
                <b-dropdown-item v-for="value in dropdownItemSortBy"
                :key="value.id"
                @click="sortBy = value.value"
                href="#">{{value.name}}</b-dropdown-item>
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
  components: {
  },
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
};


</script>
