'use strict';

exports.seed = function(knex) {
  return knex('topics').del()
    .then(() => {
      return knex('topics').insert([{
        id: 1,
        name: 'Dopeness',
        created_at: new Date('2016-07-23 14:26:16 UTC'),
        updated_at: new Date('2016-07-23 14:26:16 UTC')
      },
      {
        id: 2,
        name: 'Kicks',
        created_at: new Date('2016-07-24 14:26:16 UTC'),
        updated_at: new Date('2016-07-24 14:26:16 UTC')
      },
      {
        id: 3,
        name: 'Art',
        created_at: new Date('2016-07-25 14:26:16 UTC'),
        updated_at: new Date('2016-07-25 14:26:16 UTC')
      },
      {
        id: 4,
        name: 'Style',
        created_at: new Date('2016-07-26 14:26:16 UTC'),
        updated_at: new Date('2016-07-26 14:26:16 UTC')
      },
      {
        id: 5,
        name: 'Music',
        created_at: new Date('2016-07-27 14:26:16 UTC'),
        updated_at: new Date('2016-07-27 14:26:16 UTC')
      },
      {
        id: 6,
        name: 'Technology',
        created_at: new Date('2016-07-28 14:26:16 UTC'),
        updated_at: new Date('2016-07-28 14:26:16 UTC')
      },
      {
        id: 7,
        name: 'Food & Drink',
        created_at: new Date('2016-07-29 14:26:16 UTC'),
        updated_at: new Date('2016-07-29 14:26:16 UTC')
      },
      {
        id: 8,
        name: 'Sports',
        created_at: new Date('2016-07-30 14:26:16 UTC'),
        updated_at: new Date('2016-07-30 14:26:16 UTC')
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('topics_id_seq', (SELECT MAX(id) FROM topics));"
      );
    });
};
