export default {
  getSortedList(state) {
    const newSortKey = state.sortKey || 'id';
    return [].concat(state.cocktail).sort((d1, d2) => {
      const firstValue = d1[newSortKey];
      const secondValue = d2[newSortKey];

      if (firstValue === secondValue) {
        return 0;
      }

      return firstValue > secondValue ? 1 : -1;
    });
  },
  getCocktailFilter(state, { getSortedList }) {
    if (!state.filterByTaste && !state.filterByColor && !state.filterByAlco) return getSortedList;
    state.placeholder = `${state.filterByTaste} ${state.filterByColor} ${state.filterByAlco}`;

    return getSortedList
      .filter(value => value.taste.indexOf(state.filterByTaste) !== -1)
      .filter(value => value.color.indexOf(state.filterByColor) !== -1)
      .filter(value => value.alcoStr.indexOf(state.filterByAlco) !== -1);
  },
  getCocktail(state, { getSortedList, getCocktailFilter }) {
    let cocktail = getSortedList;

    if (getCocktailFilter) {
      cocktail = getCocktailFilter;
    }
    if (state.search) {
      cocktail = cocktail.filter(value => value.name.toLowerCase().indexOf(state.search) !== -1);
    }

    return cocktail;
  },
};
