const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { setSessionId } = require('./setSessionId');
const { setUsername } = require('./setUsername');

const { createArticle, getArticles, signup, signin } = require('./controllers');

const app = express()
  .use(bodyParser.json())
  .use(cookieParser())
  .use(setSessionId)
  .use(setUsername);

app.get('/articles', getArticles);
app.post('/articles', createArticle);

app.post('/signup', signup);
app.post('/signin', signin);

app.listen(8080, () => {
  console.log('Server listening on port 8080.');
});
