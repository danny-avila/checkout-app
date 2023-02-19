const express = require('express');
const router = express.Router();
const models = require('../../models');

router.get('/', async (req, res) => {
  console.log('session', req.session, req.sessionID);

  req.session.authenticated = true;

  const session = await models.Session.create({
    sid: req.sessionID,
    expires: req.session.cookie._expires,
    data: '',
  });

  res.status(201).send(session);
});

module.exports = router;