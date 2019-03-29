const { getMetaProperties } = require('./scrape');
const dataInterface = require('./data-interface');

const getArticles = (request, response) => {
  response.send(dataInterface.getArticles());
};

const createArticle = async (request, response) => {
  const url = request.body.url;

  if (dataInterface.findArticleByUrl(url)) {
    response.send(403, { error: 'Article URL exists already.' });
  } else {
    const properties = { ...(await getMetaProperties(url)), url };
    dataInterface.createArticle(properties);

    response.send(201, properties);

    // with .then():
    // getMetaProperties(url).then(properties => {
    //   response.send(properties);
    // });
  }
};

module.exports = { createArticle, getArticles };
