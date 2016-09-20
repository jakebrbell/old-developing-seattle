'use strict';

process.env.NODE_ENV = 'test';

const { assert } = require('chai');
const { suite, test } = require('mocha');
const bcrypt = require('bcrypt');
const request = require('supertest');
const knex = require('../db/knex');
const server = require('../server');

suite('Users Routes', () => {
  before((done) => {
    knex.migrate.latest()
      .then(() => {
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  beforeEach((done) => {
    knex.seed.run()
      .then(() => {
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  test('POST /api/users', (done) => {
    const password = 'password1234';

    request(server)
      .post('/api/users')
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .send({
        firstName: 'Janet',
        lastName: 'Fredrickson',
        email: 'janet@fredrickson.com',
        password,
        title: 'Full-Stack Web Developer',
        causes: ['Refugees', 'Homelessness'],
        skills: ['HTML', 'CSS', 'JavaScript', 'WordPress']
      })
      .expect('Content-Type', /json/)
      .expect((res) => {
        delete res.body.createdAt;
        delete res.body.updatedAt;
      })
      .expect(200, {
        id: 3,
        firstName: 'Janet',
        lastName: 'Fredrickson',
        email: 'janet@fredrickson.com',
        title: 'Full-Stack Web Developer',
        causes: ['Refugees', 'Homelessness'],
        skills: ['HTML', 'CSS', 'JavaScript', 'WordPress']
      })
      .end((httpErr, _res) => {
        if (httpErr) {
          return done(httpErr);
        }

        knex('users')
          .where('id', 3)
          .first()
          .then((user) => {
            const hashedPassword = user.hashed_password;

            delete user.hashed_password;
            delete user.created_at;
            delete user.updated_at;

            assert.deepEqual(user, {
              id: 3,
              first_name: 'Janet',
              last_name: 'Fredrickson',
              email: 'janet@fredrickson.com',
              title: 'Full-Stack Web Developer',
              causes: ['Refugees', 'Homelessness'],
              skills: ['HTML', 'CSS', 'JavaScript', 'WordPress']
            });

            const isMatch = bcrypt.compareSync(password, hashedPassword);

            assert.isTrue(isMatch, 'passwords don\'t match');
            done();
          })
          .catch((dbErr) => {
            done(dbErr);
          });
      });
  });
});
