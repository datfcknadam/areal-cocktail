<template>
    <div>
        <Navbar/>
        <div id="content">
            <b-card :class="{not_found: notFound}"> Ничего не найдено :(</b-card>
            <div class="cocktail-list">
                <div v-for="a in search_text(counter, sortedList, cocktailFilter)"
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
          <a v-if="this.cocktail.length > counter"
            :class="{disabled: isDisabled}"
            class="btn-see-more"
            @click="counter += 6">Показать еще</a>
        </div>
    </div>
</template>
<script>
import jsonCocktail from '../static/assets/json/jsonCocktail.json';
import Navbar from '../components/Navbar.vue';

export default {
  components: {
    Navbar,
  },
  data() {
    return {
      cocktail: jsonCocktail.data,
      notFound: true,
      isDisabled: false,
      counter: 6,
      sortBy: '',
    };
  },
  methods: {
    search_text(end, arrCoctail, filterCocktail) {
      let { search } = this;
      if (filterCocktail) {
        arrCoctail = filterCocktail;
      }
      if (!arrCoctail) return arrCoctail;
      if (!search) {
        this.isDisabled = false;
        this.notFound = true;
        return arrCoctail.slice(0, end);
      }
      search = search.trim().toLowerCase();
      arrCoctail = arrCoctail.filter(value => value.name.toLowerCase().indexOf(search) !== -1);
      if (arrCoctail == '') {
        this.isDisabled = true;
        this.notFound = false;
      } else if (arrCoctail.length < 6) {
        this.isDisabled = true;
        this.notFound = true;
        return arrCoctail;
      } else {
        this.isDisabled = false;
        this.notFound = true;
        return arrCoctail.slice(0, end);
      }
      return arrCoctail;
    },
    cocktailFilter() {
      if (this.filterByColor && this.filterByAlco && this.filterByTaste) {
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
        return this.cocktail.filter(value => value.taste.indexOf(this.filterByTaste) !== -1);
      }
      if (this.filterByColor) {
        return this.cocktail.filter(value => value.color.indexOf(this.filterByColor) !== -1);
      } if (this.filterByAlco) {
        return this.cocktail.filter(value => value.alcoStr.indexOf(this.filterByAlco) !== -1);
      }
      return this.cocktail;
    },
  },
  computed: {
    sortedList() {
      switch (this.sortBy) {
        case 'alco': return this.cocktail.sort(sortByAlco);
        case 'name': return this.cocktail.sort(sortByName);
        case 'price': return this.cocktail.sort(sortByPrice);
        default: return this.cocktail.sort(sortById);
      }
    },
  },
};
let sortByAlco = function (d1, d2) { return (d1.alco > d2.alco) ? 1 : -1; };
let sortByName = function (d1, d2) { return (d1.name > d2.name) ? 1 : -1; };
let sortByPrice = function (d1, d2) { return (d1.price > d2.price) ? 1 : -1; };
let sortById = function (d1, d2) { return (d1.id > d2.id) ? 1 : -1; };
</script>
<style>
img{
    height: 20vh;
    padding-bottom: 10px;
    padding-top: 10px;
}
#content{
    padding-left: 15vw;
    padding-right: 15vw;
    font-size: calc(  0.5vw + 1vh);
}
.name{
    font-size: calc(1vw + 1vh);
    font-weight: 600;
}
.price::after{
    content:"руб."
}
.volume::after{
    content:"ml";
}
.alco::after{
    content:"%";
}
</style>
