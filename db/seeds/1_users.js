'use strict';

exports.seed = function(knex) {
  return knex('users').del()
    .then(() => {
      return knex('users').insert([{
        id: 1,
        first_name: 'John',
        last_name: 'Jones',
        email: 'john@jones.com',
        hashed_password: '$2a$12$C9AYYmcLVGYlGoO4vSZTPud9ArJwbGRsJ6TUsNULzR48z8fOnTXbS',
        title: 'Web Developer',
        causes: JSON.stringify(['Environment', 'Animal Welfare']),
        skills: JSON.stringify(['Web Development', 'Photography']),
        created_at: new Date('2016-09-19 21:22:21 UTC'),
        updated_at: new Date('2016-09-19 21:22:21 UTC')
      }, {
        id: 2,
        first_name: 'Susan',
        last_name: 'James',
        email: 'susan@james.com',
        hashed_password: '$2a$12$C9AYYmcLVGYlGoO4vSZTPud9ArJwbGRsJ6TUsNULzR48z8fOnTXbS',
        title: 'Database Administrator',
        causes: JSON.stringify(['LGBTQ issues', 'Gender Equality']),
        skills: JSON.stringify(['Databases', 'Web Development']),
        created_at: new Date('2016-09-19 21:22:21 UTC'),
        updated_at: new Date('2016-09-19 21:22:21 UTC')
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));"
      );
    });
};
