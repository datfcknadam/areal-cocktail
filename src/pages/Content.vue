<template>
  <div>
    <Navbar/>
    <div id="content">
      <b-card v-if="!getCocktail.length"> Ничего не найдено :(</b-card>
      <cocktail-list/>
    </div>
    <div class="btn-center">
      <a v-if="getCocktail.length > 6"
        @click="seeMore()">Показать еще</a>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';
import Navbar from '../components/Navbar/Navbar.vue';
import CocktailList from '../components/CocktailList/CocktailList.vue';


export default {
  components: {
    Navbar,
    CocktailList,
  },
  methods: mapMutations('navbar', [
    'seeMore',
  ]),
  computed: mapGetters('navbar', [
    'getCocktail',
  ]),
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
