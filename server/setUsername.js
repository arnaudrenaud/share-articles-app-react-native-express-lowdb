const dataInterface = require('./data-interface');

const setUsername = (req, res, next) => {
  const user = dataInterface.findUserSessionBySessionId(req.cookies.sessionId);
  if (user) {
    req.username = user.username;
  }
  next();
};

module.exports = { setUsername };
