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

const findUserByUsername = username =>
  db
    .get('users')
    .find(user => user.username === username)
    .value();

const findUserSessionBySessionId = sessionId =>
  db
    .get('userSessions')
    .find(userSession => userSession.sessionId === sessionId)
    .value();

const createUser = (username, password) =>
  db
    .get('users')
    .push({ username, password })
    .write();

const createUserSession = (username, sessionId) => {
  db.get('userSessions')
    .push({ username, sessionId })
    .write();
};

module.exports = {
  getArticles,
  findArticleByUrl,
  createArticle,
  findUserByUsername,
  createUser,
  createUserSession,
  findUserSessionBySessionId,
};
