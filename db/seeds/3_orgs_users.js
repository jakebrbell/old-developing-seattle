'use strict';

exports.seed = function(knex) {
  return knex('orgs_users').del()
    .then(() => {
      return knex('orgs_users').insert([{
        id: 1,
        org_id: 1,
        user_id: 2,
        messages: JSON.stringify([{
          type: 'sent',
          text: 'I\'m interested in volunteering. I\'m great. Please call me.'
        }]),
        created_at: new Date('2016-09-19 21:22:21 UTC'),
        updated_at: new Date('2016-09-19 21:22:21 UTC')
      }, {
        id: 2,
        org_id: 3,
        user_id: 1,
        messages: JSON.stringify([{
          type: 'sent',
          text: 'I\'m interested in volunteering. I\'m great. Please call me.'
        }]),
        created_at: new Date('2016-09-19 21:22:21 UTC'),
        updated_at: new Date('2016-09-19 21:22:21 UTC')
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('orgs_users_id_seq', (SELECT MAX(id) FROM orgs_users));"
      );
    });
};
