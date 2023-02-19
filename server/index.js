const express = require('express');
const session = require('express-session');
const sequelize = require('../db/connect');
const requireLogin = require('./middleware/requireLogin');
const cors = require('cors');
const port = 5000;
const path = require('path');
const routes = require('./routes');
const projectPath = path.join(__dirname, '..');

const app = express();
app.use(cors());
app.use(express.static(path.join(projectPath, 'public')));

app.use(
  session({
    secret: 'nosferatu',
    resave: false,
    saveUninitialized: false,
    // store: sessionStore,
    cookie: {
      maxAge: 24 * 60 * 60 * 1000 // 1 day
    },
    checkExpirationInterval: 15 * 60 * 1000, // The interval at which to cleanup expired sessions in milliseconds.
    expiration: 24 * 60 * 60 * 1000 // The maximum age (in milliseconds) of a valid session.
  })
);

app.use(express.json());
app.use('/users', routes.users);
app.use('/checkout', routes.checkout);

app.use((req, res, next) => {
  console.log(req.session, req.sessionID);
  next();
});

app.get('*', function (req, res) {
  console.log(path.join(projectPath, 'public', 'index.html'));
  res.sendFile(path.join(projectPath, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
