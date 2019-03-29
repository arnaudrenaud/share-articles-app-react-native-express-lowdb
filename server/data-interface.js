const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('db.json');
const db = low(adapter);

const getArticles = () => db.get('articles').value();

const findArticleByUrl = url =>
  getArticles().find(article => article.url === url);

const createArticle = properties =>
  db
    .get('articles')
    .push(properties)
    .write();

module.exports = {
  getArticles,
  findArticleByUrl,
  createArticle,
};
