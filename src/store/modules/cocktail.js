import jsonCocktail from '../static/assets/json/jsonCocktail.json';

const namespaced = true;
const state = {
  cocktail: jsonCocktail.data,
};
export default {
  namespaced,
  state,
};
