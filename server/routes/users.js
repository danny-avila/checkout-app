const express = require('express');
const router = express.Router();
const models = require('../../models');

router.post('/', async (req, res) => {
  const formData = req.body;
  console.log('formData', formData);
  const existing = await models.User.read(formData);

  if (existing) {
    const message = `User already exists: ${formData.email}, updating user...`;
    console.log(message);
    const user = await models.User.update(formData);
    res.status(201).send({ ...user, ...req.session });
    return;
  };

  const user = await models.User.create(formData);

  req.session.user = {
    id: user.id,
    password: user.password,
  };

  const session = await models.Session.update({
    sid: req.sessionID,
    userId: user.id,
    expires: req.session.cookie._expires,
    data: '',
  });

  res.status(201).send({ ...user, ...session });
});

module.exports = router;