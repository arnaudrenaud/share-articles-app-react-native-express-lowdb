const { getMetaProperties } = require('./scrape');
const dataInterface = require('./data-interface');

const getArticles = (request, response) => {
  response.send(dataInterface.getArticles());
};

const createArticle = async (request, response) => {
  const url = request.body.url;
  console.log('req.username !!!!!! ', request.username);

  if (dataInterface.findArticleByUrl(url)) {
    response.send(403, { error: 'Article URL exists already.' });
  } else {
    const properties = {
      ...(await getMetaProperties(url)),
      url,
      username: request.username,
    };
    dataInterface.createArticle(properties);
    response.send(201, properties);

    // with .then():
    // getMetaProperties(url).then(properties => {
    //   response.send(properties);
    // });
  }
};

const signup = (request, response) => {
  const { username, password } = request.body;
  if (dataInterface.findUserByUsername(username)) {
    response.status(409).send('Username already taken.');
  } else {
    dataInterface.createUser(username, password);
    response.status(201).send({ username, password });
  }
};

const signin = (request, response) => {
  const { username, password } = request.body;
  const user = dataInterface.findUserByUsername(username);
  if (user && user.password === password) {
    dataInterface.createUserSession(user.username, request.cookies.sessionId);
    response.send(200);
  } else {
    response.status(404).send('User not found');
  }
};

module.exports = { createArticle, getArticles, signup, signin };
