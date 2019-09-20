export default {
  SET_DATA(state, value) {
    state.name = value.name;
    state.src = value.src;
    state.volume = value.vol;
    state.price = value.price;
    state.ingredient = value.ingredient;
    state.moreInfo = value.moreInfo;
  },
};
