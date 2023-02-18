const requireLogin = (req, res, next) => {
  if (!req.session.user) {
    res.send({ url: '/'});
  } else {
    next();
  }
};

module.exports = requireLogin;