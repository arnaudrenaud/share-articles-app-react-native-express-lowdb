const setSessionId = (req, res, next) => {
  // check if client sent cookie
  const cookie = req.cookies.sessionId;
  if (cookie === undefined) {
    // no: set a new cookie
    let randomNumber = Math.random().toString();
    sessionId = randomNumber.substring(2, randomNumber.length);
    res.cookie('sessionId', sessionId, { maxAge: 999900000, httpOnly: true });
    console.log('cookie created successfully');
  } else {
    // yes, cookie was already present
    console.log('cookie exists', cookie);
  }
  next(); // <-- important!
};

module.exports = { setSessionId };
