'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('orgs_users', (table) => {
    table.increments();
    table.integer('org_id')
      .notNullable()
      .references('id')
      .inTable('orgs')
      .onDelete('CASCADE')
      .index();
    table.integer('user_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .index();
    table.json('messages').notNullable().defaultTo('[]');
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('orgs_users');
};
