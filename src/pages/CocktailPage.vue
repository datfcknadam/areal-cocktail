<template>
  <div class="cocktail-page">
    <div class="router-link">
      <router-link to="/content">
        Вернуться к списку коктейлей
      </router-link>
    </div>
    <div class="name">{{$route.params.name}}</div>
    <div class="img">
      <img :src="$route.params.src">
    </div>
    <div class="params">
      <div class="alco">
        <b>Крепость:</b> {{$route.params.volume}}
      </div>
      <div class="price">
        <b>Стоимость:</b> {{$route.params.price}}
      </div>
      <div class="ingredient">
        <p><b>Состав:</b> {{$route.params.ingredient}}</p>
      </div>
      <div class="more-info">
        <p><b>Описание:</b> {{$route.params.moreInfo}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {

};
</script>
<style scoped>
.router-link{
  font-size: calc(1vw + 1vh);
  color: #007bff;
}
.cocktail-page{
    display: grid;
    grid-template-rows: 1fr;
    font-family: 'Trebuchet MS';
    word-wrap: break-word;
}
.cocktail-page > div{
    padding: calc(1vh + 2vw);
}
.name{
  font-size: calc(2vw + 2vh);
  font-weight: 600;
  text-align: center;
}
.img{
    text-align: center;
}
img{
  height: calc(35vh + 10vw);
  padding-bottom: 10px;
  padding-top: 10px;
}
.params{
  font-size: calc(1vw + 1vh);
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
