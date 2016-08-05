'use strict';

const express = require('express');
const router = express.Router();
const boom = require('boom');
const knex = require('../knex');
const ev = require('express-validation');
const validations = require('../validations/posts');
const { camelizeKeys, decamelizeKeys } = require('humps');
const { checkAuth } = require('../middleware');

router.get('/api/posts', (req, res, next) => {
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

router.post('/api/posts', checkAuth, ev(validations.post), (req, res, next) => {
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

router.get('/api/posts/:topicId', (req, res, next) => {
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

// need to add ev(validate.patch)
router.patch('/api/posts', checkAuth, (req, res, next) => {
  const { rating, id } = req.body;

  knex('posts')
    .where('id', id)
    .first()
    .then((row) => {
      if (!row) {
        throw boom.notFound('Post not found');
      }

      const post = decamelizeKeys({ rating, id });

      return knex('posts')
        .update(post, '*')
        .where('id', id)
    })
    .then((posts) => {
      res.send(camelizeKeys(posts[0]));
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
