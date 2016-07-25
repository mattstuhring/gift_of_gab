'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex');
const ev = require('express-validation');
const validations = require('../validations/topics');

router.get('/topics', (req, res, next) => {
  knex('topics')
  .orderBy('id', 'DESC')
  .then((topics) => {
    res.send(topics);
  })
  .catch((err) => {
    next(err);
  });
});

router.post('/topics', ev(validations.post), (_req, res, next) => {
  knex('topics')
    .insert(req.body, '*')
    .then((topics) => {
      res.send(topics[0]);
    })
    .catch((err) => {
      next(err);
    });
});


module.exports = router;
