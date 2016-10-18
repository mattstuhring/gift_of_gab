'use strict';

exports.seed = function(knex) {
  return knex('users').del()
    .then(() => {
      return knex('users').insert([{
        id: 1,
        username: 'matt',
        hashed_password: '$2a$12$gL6rpnP7DMt6cyA2VCN59.2L3yLi5x6atgIsVWpb/8/EDERIw0BIy',
        first_name: 'Matt',
        last_name: 'Stuhring',
        created_at: new Date('2016-07-23 14:26:16 UTC'),
        updated_at: new Date('2016-07-23 14:26:16 UTC')
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));"
      );
    });
};
