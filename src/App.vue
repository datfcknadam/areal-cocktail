<template>
<div id="#app">
    <Content/>
</div>
</template>

<script>

import Content from './pages/Content.vue';

export default {
  name: 'App',
  components: {
    Content,
  },
  data() {
    return {
      message: '',
      more: true,
    };
  },
  watch: {
    // Добавление новых значений фильтров и сортировок в localStorage
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
  // Сортировка

};

</script>

<style>
.cocktail-list{
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: repeat(auto-fit, minmax(calc(16vw + 6vh), 2fr));
    font-family: 'Trebuchet MS';
    word-wrap: break-word;
    margin-top: 10vh;
}
.cocktail-list > div{
    padding: calc(1vh + 2vw);
    text-align: center;
    box-shadow: 0 0 1px 0 white inset, 0 0 1px 0 white;
    border: 2px solid #d9d9d9;
}
body{
    margin: 0px;

}
.header{
    width: 100%;
    height: 9vh;
    background: black;
    color:wheat;
    margin-bottom: 3vh;
    position: fixed;
    top: 0px;
    display: inline-flex;
}
.btn-see-more{
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
.btn-see-more:active{
    background: linear-gradient(114deg, #f4ddb2, #b9b9b9);
}
.btn-see-more:hover{
    background: linear-gradient(114deg,#b9b9b9,#f4ddb2 );
}
.btn-center{
    text-align: center;
    margin-top: 6vh;
    margin-bottom: 8vh;
}
.not_found{
    display: none;
}
.alco, .volume, .price, .ingredient{
    color: #4c4d5a;
}
.disabled{
    display: none;
}
</style>
