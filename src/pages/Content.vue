<template>
  <div>
    <Navbar @search="valueSearch"
      @taste="valueFilterTaste"
      @alco="valueFilterAlco"
      @color="valueFilterColor"
      @sortBy="valueSortBy"
      @removeFilter="cleanFilter"/>
      <div id="content">
      <b-card :class="{not_found: foundCocktail}"> Ничего не найдено :(</b-card>
      <cocktail-list :cocktailIn="search_text(cocktailFilter())" />
    </div>
    <div class="btn-center">
      <a v-if="this.cocktail.length > counter" :class="{disabled: isDisabled}" class="btn-see-more"
        @click="counter += 6">Показать еще</a>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar/Navbar.vue';
import CocktailList from '../components/Coctail-list/CocktailList.vue';
import jsonCocktail from '../components/static/assets/json/jsonCocktail.json';

const sortByAlco = function sortByAlco(d1, d2) {
  return (d1.alco > d2.alco) ? 1 : -1;
};
const sortByName = function sortByName(d1, d2) {
  return (d1.name > d2.name) ? 1 : -1;
};
const sortByPrice = function sortByPrice(d1, d2) {
  return (d1.price > d2.price) ? 1 : -1;
};
const sortById = function sortById(d1, d2) {
  return (d1.id > d2.id) ? 1 : -1;
};
export default {
  components: {
    Navbar,
    CocktailList,
  },
  data() {
    return {
      foundCocktail: true,
      isDisabled: false,
      counter: 6,
      sortBy: '',
      search: '',
      filterByTaste: null,
      filterByColor: null,
      filterByAlco: null,
      more: true,
      cocktail: jsonCocktail.data,
    };
  },
  methods: {
    cleanFilter() {
      this.filterByAlco = '';
      this.filterByColor = '';
      this.filterByTaste = '';
      this.placeholder = 'Текила...';
    },
    valueSearch(value) {
      this.search = value;
    },
    valueFilterTaste(value) {
      this.filterByTaste = value;
    },
    valueFilterAlco(value) {
      this.filterByAlco = value;
    },
    valueFilterColor(value) {
      this.filterByColor = value;
    },
    valueSortBy(value) {
      this.sortBy = value;
    },
    search_text(filterCocktail) {
      let {
        search,
      } = this;
      let cocktail = this.sortedList;
      if (filterCocktail) {
        cocktail = filterCocktail;
      }
      if (search) {
        search = search.trim().toLowerCase();
        cocktail = cocktail.filter(value => value.name.toLowerCase().indexOf(search) !== -1);
      }
      if (cocktail.length <= 0) {
        this.foundCocktail = false;
        this.isDisabled = true;
        return cocktail;
      }
      if (cocktail.length <= 6 && cocktail.length > 0) {
        this.isDisabled = true;
        this.foundCocktail = true;
        return cocktail;
      }
      this.isDisabled = false;
      this.foundCocktail = true;
      return cocktail.slice(0, this.counter);
    },
    cocktailFilter() {
      if (!this.filterByTaste && !this.filterByColor && !this.filterByAlco) return this.cocktail;
      return this.cocktail
        .filter(value => value.taste.indexOf(this.filterByTaste) !== -1)
        .filter(value => value.color.indexOf(this.filterByColor) !== -1)
        .filter(value => value.alcoStr.indexOf(this.filterByAlco) !== -1);
    },
  },
  computed: {
    sortedList() {
      switch (this.sortBy) {
        case 'alco':
          // eslint-disable-next-line vue/no-side-effects-in-computed-properties
          return this.cocktail.sort(sortByAlco);
        case 'name':
          // eslint-disable-next-line vue/no-side-effects-in-computed-properties
          return this.cocktail.sort(sortByName);
        case 'price':
          // eslint-disable-next-line vue/no-side-effects-in-computed-properties
          return this.cocktail.sort(sortByPrice);
        default:
          // eslint-disable-next-line vue/no-side-effects-in-computed-properties
          return this.cocktail.sort(sortById);
      }
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

<style>
#content {
  padding-left: 15vw;
  padding-right: 15vw;
  font-size: calc(0.5vw + 1vh);
}
</style>
