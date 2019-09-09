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
      <div @search="valueSearch" class="cocktail-list">
        <div v-for="a in search_text(cocktailFilter())"
          :key="a.id"
          class="cocktail">
          <div class="name">
            <p>{{a.name}} </p>
          </div>
          <div class="volume">
            {{a.vol}}
          </div>
          <img :src="a.src">
          <div class=alco>
            <b>Крепость:</b> {{a.alco}}
          </div>
          <div class="price">
            {{a.price}}
          </div>
          <div class="ingredient">
            <p><b>Состав:</b> {{a.ingredient}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="btn-center">
      <a v-if="this.cocktail.length > counter" :class="{disabled: isDisabled}" class="btn-see-more"
        @click="counter += 6">Показать еще</a>
    </div>
  </div>
</template>

<script>
import jsonCocktail from '../components/static/assets/json/jsonCocktail.json';
import Navbar from '../components/Navbar/Navbar.vue';

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
  },
  data() {
    return {
      cocktail: jsonCocktail.data,
      foundCocktail: true,
      isDisabled: false,
      counter: 6,
      sortBy: '',
      search: '',
      filterByTaste: null,
      filterByColor: null,
      filterByAlco: null,
      more: true,
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
      if (!cocktail) {
        this.foundCocktail = false;
        return cocktail;
      }
      if (!search) {
        this.isDisabled = false;
        this.foundCocktail = true;
        cocktail = cocktail.slice(0, this.counter);
        return cocktail;
      }
      search = search.trim().toLowerCase();
      cocktail = cocktail.filter(value => value.name.toLowerCase().indexOf(search) !== -1);
      if (cocktail.length === 0) {
        this.isDisabled = true;
        this.foundCocktail = false;
      } else if (cocktail.length <= 6) {
        this.isDisabled = true;
        this.foundCocktail = true;
        return cocktail;
      } else {
        this.isDisabled = false;
        this.foundCocktail = true;
        return cocktail.slice(0, this.counter);
      }
      return cocktail;
    },
    cocktailFilter() {
      if (this.filterByColor
        && this.filterByAlco
        && this.filterByTaste) {
        return this.cocktail.filter((value) => {
          const alcoStr = value.alcoStr.indexOf(this.filterByAlco) !== -1;
          const color = value.color.indexOf(this.filterByColor) !== -1;
          const taste = value.taste.indexOf(this.filterByTaste) !== -1;
          this.placeholder = `${this.filterByColor} + ${this.filterByTaste} + ${this.filterByAlco}`;
          return alcoStr && color && taste;
        });
      }

      if (this.filterByTaste && this.filterByColor) {
        return this.cocktail.filter((value) => {
          const color = value.color.indexOf(this.filterByColor) !== -1;
          const taste = value.taste.indexOf(this.filterByTaste) !== -1;
          this.placeholder = `${this.filterByColor} + ${this.filterByTaste}`;
          return color && taste;
        });
      }
      if (this.filterByTaste && this.filterByAlco) {
        return this.cocktail.filter((value) => {
          const alcoStr = value.alcoStr.indexOf(this.filterByAlco) !== -1;
          const taste = value.taste.indexOf(this.filterByTaste) !== -1;
          this.placeholder = `${this.filterByAlco} + ${this.filterByTaste}`;
          return alcoStr && taste;
        });
      }
      if (this.filterByColor && this.filterByAlco) {
        return this.cocktail.filter((value) => {
          const alcoStr = value.alcoStr.indexOf(this.filterByAlco) !== -1;
          const color = value.color.indexOf(this.filterByColor) !== -1;
          this.placeholder = `${this.filterByAlco} + ${this.filterByColor}`;
          return alcoStr && color;
        });
      }

      if (this.filterByTaste) {
        return this.cocktail
          .filter(value => value.taste.indexOf(this.filterByTaste) !== -1);
      }
      if (this.filterByColor) {
        return this.cocktail
          .filter(value => value.color.indexOf(this.filterByColor) !== -1);
      }
      if (this.filterByAlco) {
        return this.cocktail
          .filter(value => value.alcoStr.indexOf(this.filterByAlco) !== -1);
      }
      return this.cocktail;
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
img {
  height: 20vh;
  padding-bottom: 10px;
  padding-top: 10px;
}

#content {
  padding-left: 15vw;
  padding-right: 15vw;
  font-size: calc(0.5vw + 1vh);
}

.name {
  font-size: calc(1vw + 1vh);
  font-weight: 600;
}

.price::after {
  content: "руб."
}

.volume::after {
  content: "ml";
}

.alco::after {
  content: "%";
}
</style>
