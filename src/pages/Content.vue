<template>
  <div>
    <Navbar
      @search="valueSearch"
      @taste="valueFilterTaste"
      @alco="valueFilterAlco"
      @color="valueFilterColor"
      @sortBy="valueSortBy"
      @removeFilter="cleanFilter"/>
    <div id="content">
      <b-card :class="{not_found: foundCocktail}"> Ничего не найдено :(</b-card>
      <cocktail-list :cocktailIn="search_text(cocktailFilter())"/>
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
      let { search } = this;
      /* т.е. ты сначала получил отсортированный список */
      let cocktail = this.sortedList;
      if (filterCocktail) {
        /* в случае если фильтрация нужна, то уже совершенно другой список был бы, но из-за сайдэфекта сортировки все работает сейчас */
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

      /* а для чего предыдущий случай вообще рассматривать?) */
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
    sortByParam(array, param) {
      return [].concat(array).sort((d1, d2) => {
        const firstValue = d1[param];
        const secondValue = d2[param];

        if (firstValue === secondValue) {
          return 0;
        }

        return firstValue > secondValue ? 1 : -1;
      });
    },
  },
  computed: {
    /*
        * // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        * помазать зеленкой это конечно интересный ход.. но неправильный:)
        * */
    sortedList() {
      const sortKey = this.sortBy || 'id';
      return this.sortByParam(this.cocktail, sortKey);
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
