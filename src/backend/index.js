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
  res.json((cocktails.data || [])
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
