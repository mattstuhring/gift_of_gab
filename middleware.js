'use strict';

const jwt = require('jsonwebtoken');

const checkAuth = function(req, res, next) {
  jwt.verify(req.cookies.accessToken, 'SECRET_KEY', (err, decoded) => {
    if (err) {
      return res.sendStatus(401);
    }

    req.token = decoded; // decoded = payload
    next();
  });
}

module.exports = { checkAuth };
