'use strict';

process.env.NODE_ENV = 'test';

const { assert } = require('chai');
const { suite, test } = require('mocha');
const knex = require('../db/knex');

suite('Seeds', () => {
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

  test('users rows', (done) =>{
    knex('users').orderBy('id', 'ASC')
      .then((actual) => {
        const expected = [{
          id: 1,
          first_name: 'John',
          last_name: 'Jones',
          email: 'john@jones.com',
          hashed_password: '$2a$12$C9AYYmcLVGYlGoO4vSZTPud9ArJwbGRsJ6TUsNULzR48z8fOnTXbS',
          title: 'Web Developer',
          causes: ["Environment","Animal Welfare"],
          skills: ["Web Development","Photography"],
          created_at: new Date('2016-09-19 21:22:21 UTC'),
          updated_at: new Date('2016-09-19 21:22:21 UTC')
        }, {
          id: 2,
          first_name: 'Susan',
          last_name: 'James',
          email: 'susan@james.com',
          hashed_password: '$2a$12$C9AYYmcLVGYlGoO4vSZTPud9ArJwbGRsJ6TUsNULzR48z8fOnTXbS',
          title: 'Database Administrator',
          causes: ["LGBTQ issues","Gender Equality"],
          skills: ["Databases","Web Development"],
          created_at: new Date('2016-09-19 21:22:21 UTC'),
          updated_at: new Date('2016-09-19 21:22:21 UTC')
        }];

        for (let i = 0; i < expected.length; i++) {
          assert.deepEqual(
            actual[i],
            expected[i],
            `Row id=${i + 1} not the same`
          );
        }

        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  test('orgs rows', (done) => {
    knex('orgs').orderBy('id', 'ASC')
      .then((actual) => {
        const expected = [{
          id: 1,
          name: 'Company Name',
          address: '1260 Republican Street, Seattle, WA 98109',
          email: 'first.company@name.com',
          logo_url: 'https://s-media-cache-ak0.pinimg.com/564x/5a/bd/f4/5abdf4f571593356b4a27339529798d0.jpg',
          causes: ["Animal Welfare","Environment"],
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          proposals: [{"description": "Our website is outdated and no longer working. We are looking for someone who can build us a new one.","name": "We need a new website","skills": ["Designer","Web Developer"]},{"description": "Our website is outdated and no longer working. We are looking for someone who can build us a new one.","name": "We need a new website","skills": ["Designer","Web Developer"]}],
          created_at: new Date('2016-09-19 21:22:21 UTC'),
          updated_at: new Date('2016-09-19 21:22:21 UTC')
        }, {
          id: 2,
          name: 'Company Name',
          address: '1260 Republican Street, Seattle, WA 98109',
          email: 'second.company@name.com',
          logo_url: 'http://www.zepfcenter.org/clientuploads/news/end-human-trafficking.jpg',
          causes: ["Human Trafficking"],
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          proposals: [{"description": "Our website is outdated and no longer working. We are looking for someone who can build us a new one.","name": "We need a new website","skills": ["Designer","Web Developer"]},{"description": "Our website is outdated and no longer working. We are looking for someone who can build us a new one.","name": "We need a new website","skills": ["Designer","Web Developer"]}],
          created_at: new Date('2016-09-19 21:22:21 UTC'),
          updated_at: new Date('2016-09-19 21:22:21 UTC')
        }, {
          id: 3,
          name: 'Company Name',
          address: '1260 Republican Street, Seattle, WA 98109',
          email: 'third.company@name.com',
          logo_url: 'https://s-media-cache-ak0.pinimg.com/236x/a4/89/c8/a489c8a9fa06e2ae1ca1dbb5f58dcd08.jpg',
          causes: ["Education"],
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          proposals: [{"description": "Our website is outdated and no longer working. We are looking for someone who can build us a new one.","name": "We need a new website","skills": ["Designer","Web Developer"]},{"description": "Our website is outdated and no longer working. We are looking for someone who can build us a new one.","name": "We need a new website","skills": ["Designer","Web Developer"]}],
          created_at: new Date('2016-09-19 21:22:21 UTC'),
          updated_at: new Date('2016-09-19 21:22:21 UTC')
        }];

        for (let i = 0; i < expected.length; i++) {
          assert.deepEqual(
            actual[i],
            expected[i],
            `Row id=${i + 1} not the same`
          );
        }

        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  test('orgs_users rows', (done) => {
    knex('orgs_users').orderBy('id', 'ASC')
      .then((actual) => {
        const expected = [{
          id: 1,
          org_id: 1,
          user_id: 2,
          messages: [{"text":"I'm interested in volunteering. I'm great. Please call me.","type": "sent"}],
          created_at: new Date('2016-09-19 21:22:21 UTC'),
          updated_at: new Date('2016-09-19 21:22:21 UTC')
        }, {
          id: 2,
          org_id: 3,
          user_id: 1,
          messages: [{"text":"I'm interested in volunteering. I'm great. Please call me.","type": "sent"}],
          created_at: new Date('2016-09-19 21:22:21 UTC'),
          updated_at: new Date('2016-09-19 21:22:21 UTC')
        }];

        for (let i = 0; i < expected.length; i++) {
          assert.deepEqual(
            actual[i],
            expected[i],
            `Row id=${i + 1} not the same`
          );
        }

        done();
      })
      .catch((err) => {
        done(err);
      });
  });
});
