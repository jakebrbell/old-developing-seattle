'use strict';

const express = require('express');
const Mailgun = require('mailgun-js');

const router = express.Router();

// const email = {
//   to: 'Jake Bell <jakebrbell@gmail.com>',
//   from: 'Jake Bell <jakebrbell@gmail.com>',
//   subject: 'Test from messages routes',
//   text: 'This is just me testing this out'
// }

router.post('/messages', (req, res, next) => {
  const { to, from, subject, text } = req.body;
  const email = { to, from, subject, text };

  const apiKey = process.env.MAILGUN_SECRET;
  const domain = 'jakebell.io';

  const mailgun = new Mailgun({ apiKey, domain });

  mailgun.messages().send(email, (err, body) => {
    console.log(body);
    res.sendStatus(200);
  })
  .catch((err) => {
    next(err);
  });
});

module.exports = router;
