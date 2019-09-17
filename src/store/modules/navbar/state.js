
import SortItem from '../../../static/assets/json/dropdownItemSortBy.json';
import FillterItem from '../../../static/assets/json/dropdownItem.json';

export default {
  serverUrl: 'http://localhost:3005',
  filterByAlco: '',
  filterByColor: '',
  filterByTaste: '',
  totalCocktail: '',
  sortKey: '',
  cocktail: {},
  counter: 6,
  search: null,
  placeholder: 'Текила...',
  dropdownsFilter: {
    alco: {
      text: 'Крепкость',
      item: FillterItem.alco,
    },
    color: {
      text: 'Цвет',
      item: FillterItem.color,
    },
    taste: {
      text: 'Вкус',
      item: FillterItem.taste,
    },
  },
  dropdownSort: SortItem.data,
};
