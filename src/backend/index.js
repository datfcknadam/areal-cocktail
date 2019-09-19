const express = require('express');
const cors = require('cors');
const cocktails = require('./static/assets/json/jsonCocktail.json');
const filter = require('./static/assets/json/dropdownItem.json');
const sort = require('./static/assets/json/dropdownItemSortBy.json');

const app = express();

app.use(cors());
app.use(express.static('static'));
app.get('/api/v1/cocktails/', (req, res) => {
  const limit = req.query.limit || cocktails.data.length;
  const page = req.query.page > 0 ? req.query.page : 1;
  const search = req.query.search || '';
  const filterByAlco = req.query.alco || '';
  const filterByColor = req.query.color || '';
  const filterByTaste = req.query.taste || '';
  const sortKey = req.query.sortKey || 'id';

  res.json((cocktails.data || []).sort((d1, d2) => {
    const firstValue = d1[sortKey];
    const secondValue = d2[sortKey];

    if (firstValue === secondValue) {
      return 0;
    }

    return firstValue > secondValue ? 1 : -1;
  })
    .filter(value => value.taste.indexOf(filterByTaste) !== -1)
    .filter(value => value.color.indexOf(filterByColor) !== -1)
    .filter(value => value.alcoStr.indexOf(filterByAlco) !== -1)
    .filter(value => value.name.toLowerCase()
      .indexOf(search.toLowerCase()) !== -1)
    .slice(limit * (page - 1), limit * page));
});

app.get('/api/v1/total-cocktails', (req, res) => {
  res.json({ total: cocktails.data.length });
});

app.get('/api/v1/filter', (req, res) => {
  res.json(filter);
});

app.get('/api/v1/sort', (req, res) => {
  res.json(sort.data);
});

app.listen(3005, () => {
  console.log('>>> START', new Date());
});
