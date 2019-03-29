const fetch = require('node-fetch');
const cheerio = require('cheerio');

// const URL = 'https://www.atlasobscura.com/articles/illustrated-guide-to-ottoman-clothes';
// const URL = 'https://blog.ycombinator.com/yc-interviews-in-india/';
// const URL =
//   'https://medicalxpress.com/news/2019-03-approximately-megabytes-language-brain.html';
// const URL = 'https://github.com/manoelt/50M_CTF_Writeup';
// const URL =
//   'https://money.howstuffworks.com/pros-and-cons-coworking-spaces.htm';
const URL = 'https://keybase.io/blog/chat-apps-softer-than-tofu';

const getMetaProperties = url => {
  return fetch(url)
    .then(response => response.text())
    .then(text => {
      const $ = cheerio.load(text);

      const title = $('title').text() || '';
      const imageURL =
        $('meta[property="og:image"]').attr('content') ||
        $('img')
          .first()
          .attr('src') ||
        '';
      const description =
        $('meta[property="og:description"]').attr('content') || '';

      return { title, imageURL, description };
    });
};

module.exports = {
  getMetaProperties,
};
