'use strict';

const boom = require('boom');
const express = require('express');
const knex = require('../db/knex');
const { camelizeKeys, decamelizeKeys } = require('humps');

// eslint-disable-next-line new-cap
const router = express.Router();

router.get('/orgs', (_req, res, next) => {
  knex('orgs')
    .orderBy('id')
    .then((rows) => {
      const orgs = camelizeKeys(rows);

      res.send(orgs);
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/orgs/:id', (req, res, next) => {
  const id = Number.parseInt(req.params.id);

  if (Number.isNaN(id)) {
    return next();
  }

  knex('orgs')
    .where('id', id)
    .first()
    .then((row) => {
      if (!row) {
        throw boom.create(404, 'Not Found');
      }

      const org = camelizeKeys(row);

      res.send(org);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
