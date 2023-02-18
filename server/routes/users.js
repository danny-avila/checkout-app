// express route for /users

const express = require('express');
const router = express.Router();
const models = require('../../models');

router.post('/', async (req, res) => {
  const { name, email, password } = req.body;

  console.log('session', req.session, req.sessionID);

  const user = await models.User.create({
    name,
    email,
    password
  });

  req.session.authenticated = true;
  req.session.user = {
    id: user.id,
    password: user.password,
  };

  const session = await models.Session.create({
    sid: req.sessionID,
    userId: user.id,
    expires: req.session.cookie._expires,
    data: '',
  });

  res.status(201).send({ ...user, ...session });
});

// router.get('/:id(\\d+)', asyncHandler(async (req, res) => {

module.exports = router;