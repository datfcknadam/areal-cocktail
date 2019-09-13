<template>
  <div>
    <Navbar
      :infoPlaceholder="placeholder"/>
    <div id="content">
      <b-card :class="{not_found: foundCocktail}"> Ничего не найдено :(</b-card>
      <cocktail-list/>
    </div>
    <div class="btn-center">
      <a v-if="this.cocktail.length > counter" :class="{disabled: isDisabled}"
        @click="counter += 6">Показать еще</a>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Navbar from '../components/Navbar/Navbar.vue';
import CocktailList from '../components/CocktailList/CocktailList.vue';

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

    };
  },
  methods: {
  },
  computed: mapState({
    filterByAlco: state => state.navbar.alco,
    filterByColor: state => state.navbar.color,
    filterByTaste: state => state.navbar.taste,
    cocktail: state => state.navbar.cocktail,
  }),
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
  .not_found{
    display: none;
  }

  .disabled{
    display: none;
  }
  #content {
    padding-left: 15vw;
    padding-right: 15vw;
    font-size: calc(0.5vw + 1vh);
  }
  .btn-center > a{
    width: 20vw;
    height: 5vh;
    background: #f4ddb2;
    font-size: 3vh;
    border-radius: 60px;
    padding: .8em 1em calc(.8em + 3px);
    color: white;
    text-decoration: none;
    font-weight: 700;
    transition: 0.2s;
    cursor: pointer;
  }
  .btn-center > a:active{
    background: linear-gradient(114deg, #f4ddb2, #b9b9b9);
  }
  .btn-center > a:hover{
    background: linear-gradient(114deg,#b9b9b9,#f4ddb2 );
  }
  .btn-center{
    text-align: center;
    margin-top: 6vh;
    margin-bottom: 8vh;
  }
</style>
