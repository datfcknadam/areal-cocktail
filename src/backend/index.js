const express = require('express');

const cors = require('cors');

const app = express();

const cocktails = require('./jsonCocktail.json');

app.use(cors());
app.use(express.static('static'));

app.get('/api/v1/cocktails/', (req, res) => {
  const limit = req.query.limit || cocktails.data.length;
  const page = req.query.page > 0 ? req.query.page : 1;
  res.json((cocktails.data || []).slice(limit * (page - 1), limit * page));
});

app.listen(3005, () => {
  console.log('>>> START', new Date());
});
