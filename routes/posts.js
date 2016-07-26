'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex');
const ev = require('express-validation');
const validations = require('../validations/posts');
const { camelizeKeys, decamelizeKeys } = require('humps');

router.get('/posts', (req, res, next) => {
  knex('posts')
  .orderBy('id')
  .then((posts) => {
    const allPosts = camelizeKeys(posts);

    res.send(allPosts);
  })
  .catch((err) => {
    next(err);
  });
});

router.post('/posts', ev(validations.post), (req, res, next) => {
  const { title, imageUrl, description, rating, userId, topicId } = req.body;
  const newPost = { title, imageUrl, description, rating, userId, topicId };
  const row = decamelizeKeys(newPost);

  knex('posts')
    .insert(row, '*')
    .then((rows) => {
      const post = camelizeKeys(rows[0]);

      res.status(200)
        .send(post);
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/posts/:topicId', (req, res, next) => {
  const topicId = Number.parseInt(req.params.topicId);

  if (Number.isNaN(topicId)) {
    return res.status(400)
      .set('Content-Type', 'text/plain')
      .send('Invalid Topic Id');
  }

  knex('posts')
    .where('topic_id', topicId)
    .then((posts) => {
      const allPosts = camelizeKeys(posts);

      res.send(allPosts);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
