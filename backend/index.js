const express = require('express');

const app = express();

const cocktails = require('./jsonCocktail.json');

app.get('/api/v1/cocktails/', (req, res) => {
  const limit = req.query.limit || 10;
  const page = req.query.page > 0 ? req.query.page : 1;

  res.json((cocktails || []).slice(limit * (page - 1), limit * page));
});

app.listen(3005, () => {
  console.log('>>> START', new Date());
});
