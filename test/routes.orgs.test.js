'use strict';

process.env.NODE_ENV = 'test';

const { suite, test } = require('mocha');
const request = require('supertest');
const knex = require('../db/knex');
const server = require('../server');

suite('Orgs Routes', () => {
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

  test('GET /api/orgs', (done) => {
    request(server)
      .get('/api/orgs')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, [{
        id: 1,
        name: 'Company Name',
        address: '1260 Republican Street, Seattle, WA 98109',
        email: 'first.company@name.com',
        logoUrl: 'https://s-media-cache-ak0.pinimg.com/564x/5a/bd/f4/5abdf4f571593356b4a27339529798d0.jpg',
        causes: ["Animal Welfare","Environment"],
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        proposals: [{"description": "Our website is outdated and no longer working. We are looking for someone who can build us a new one.","name": "We need a new website","skills": ["Designer","Web Developer"]},{"description": "Our website is outdated and no longer working. We are looking for someone who can build us a new one.","name": "We need a new website","skills": ["Designer","Web Developer"]}],
        createdAt: '2016-09-19T21:22:21.000Z',
        updatedAt: '2016-09-19T21:22:21.000Z'
      }, {
        id: 2,
        name: 'Company Name',
        address: '1260 Republican Street, Seattle, WA 98109',
        email: 'second.company@name.com',
        logoUrl: 'http://www.zepfcenter.org/clientuploads/news/end-human-trafficking.jpg',
        causes: ["Human Trafficking"],
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        proposals: [{"description": "Our website is outdated and no longer working. We are looking for someone who can build us a new one.","name": "We need a new website","skills": ["Designer","Web Developer"]},{"description": "Our website is outdated and no longer working. We are looking for someone who can build us a new one.","name": "We need a new website","skills": ["Designer","Web Developer"]}],
        createdAt: '2016-09-19T21:22:21.000Z',
        updatedAt: '2016-09-19T21:22:21.000Z'
      }, {
        id: 3,
        name: 'Company Name',
        address: '1260 Republican Street, Seattle, WA 98109',
        email: 'third.company@name.com',
        logoUrl: 'https://s-media-cache-ak0.pinimg.com/236x/a4/89/c8/a489c8a9fa06e2ae1ca1dbb5f58dcd08.jpg',
        causes: ["Education"],
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        proposals: [{"description": "Our website is outdated and no longer working. We are looking for someone who can build us a new one.","name": "We need a new website","skills": ["Designer","Web Developer"]},{"description": "Our website is outdated and no longer working. We are looking for someone who can build us a new one.","name": "We need a new website","skills": ["Designer","Web Developer"]}],
        createdAt: '2016-09-19T21:22:21.000Z',
        updatedAt: '2016-09-19T21:22:21.000Z'
      }], done);
  });

  test('GET /api/orgs/:id', (done) => {
    request(server)
      .get('/api/orgs/1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, {
        id: 1,
        name: 'Company Name',
        address: '1260 Republican Street, Seattle, WA 98109',
        email: 'first.company@name.com',
        logoUrl: 'https://s-media-cache-ak0.pinimg.com/564x/5a/bd/f4/5abdf4f571593356b4a27339529798d0.jpg',
        causes: ["Animal Welfare","Environment"],
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        proposals: [{"description": "Our website is outdated and no longer working. We are looking for someone who can build us a new one.","name": "We need a new website","skills": ["Designer","Web Developer"]},{"description": "Our website is outdated and no longer working. We are looking for someone who can build us a new one.","name": "We need a new website","skills": ["Designer","Web Developer"]}],
        createdAt: '2016-09-19T21:22:21.000Z',
        updatedAt: '2016-09-19T21:22:21.000Z'
      }, done);
  });
});
