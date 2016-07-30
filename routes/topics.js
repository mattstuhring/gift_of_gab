'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex');
const ev = require('express-validation');
const validations = require('../validations/topics');
const { camelizeKeys, decamelizeKeys } = require('humps');

router.get('/topics', (req, res, next) => {
  knex('topics')
  .orderBy('id')
  .then((topics) => {
    const allTopics = camelizeKeys(topics);

    res.send(allTopics);
  })
  .catch((err) => {
    next(err);
  });
});

router.post('/topics', ev(validations.post), (req, res, next) => {
  const topic = req.body;
  const row = decamelizeKeys(newPost);

  knex('topics')
    .insert(topic, '*')
    .then((topics) => {
      const postTopic = camelizeKeys(topics);

      res.send(postTopic[0]);
    })
    .catch((err) => {
      next(err);
    });
});


module.exports = router;