<template>
  <div>
    <go-top></go-top>
      <b-pagination
          :total-rows="totalCocktail"
          :per-page="counter"
          v-model="currentPage"
        ></b-pagination>
    <div id="content">
      <b-card v-if="!cocktail.length"> Ничего не найдено :(</b-card>
      <cocktail-list />
    </div>
    <div class="btn-center">
      <a v-if="cocktail.length >= 6 && totalCocktail >= counter"
        @click="UPDATE_COUNTER()">Показать еще</a>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import GoTop from '@inotom/vue-go-top';
import CocktailList from '../components/CocktailList/CocktailList.vue';

export default {
  components: {
    CocktailList,
    GoTop,
  },
  data() {
    return {
      currentPage: 1,
    };
  },
  methods: {
    ...mapMutations('navbar', [
      'UPDATE_COUNTER',
    ]),
  },
  computed: {
    ...mapState('navbar',
      ['counter',
        'totalCocktail',
        'search',
        'cocktail']),
  },
  mounted() {
    this.$store.dispatch('navbar/loadCocktails');
    this.$store.dispatch('navbar/totalCocktails');
    this.$store.dispatch('navbar/loadFilters');
    this.$store.dispatch('navbar/loadSort');
  },
  watch: {
    counter() {
      this.$store.dispatch('navbar/loadCocktails');
    },
    currentPage(value) {
      this.$store.commit('navbar/SET_CURRENT_PAGE', value);
      this.$store.dispatch('navbar/loadCocktails');
    },
  },
};
</script>

<style>
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
  .btn-center > a:hover{
    background: linear-gradient(114deg,#b9b9b9,#f4ddb2 );
  }
  .btn-center{
    text-align: center;
    margin-top: 6vh;
    margin-bottom: 8vh;
  }
</style>
