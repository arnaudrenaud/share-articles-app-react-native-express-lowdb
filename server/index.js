const express = require('express');
const bodyParser = require('body-parser');

const { createArticle, getArticles } = require('./controllers');

const app = express().use(bodyParser.json());

app.get('/articles', getArticles);
app.post('/articles', createArticle);

app.listen(8080, () => {
  console.log('Server listening on port 8080.');
});
