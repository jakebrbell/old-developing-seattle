'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('orgs', (table) => {
    table.increments();
    table.string('name').notNullable().defaultTo('');
    table.text('desc').notNullable().defaultTo('');
    table.string('email').unique().notNullable();
    table.json('causes').notNullable().defaultTo('[]');
    table.string('logo_url').notNullable().defaultTo('');
    table.json('proposals').notNullable().defaultTo('[]');
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('orgs');
};
