const express = require('express');
const session = require('express-session');
const sequelize = require('../db/connect');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const requireLogin = require('./middleware/requireLogin');
const cookieParser = require('cookie-parser');
const port = 3000;
const path = require('path');
const routes = require('./routes');
const projectPath = path.join(__dirname, '..');

const app = express();
app.use(express.json());
app.use(express.static(path.join(projectPath, 'public')));

// Set up cookie parser middleware
app.use(cookieParser());

// Set up express-session middleware
const sessionStore = new SequelizeStore({
  db: sequelize,
  table: 'sessions'
});
app.use(session({
  secret: 'nosferatu',
  resave: false,
  saveUninitialized: false,
  store: sessionStore,
  cookie: {
    maxAge: 24 * 60 * 60 * 1000 // 1 day
  }
}));

app.get('/', function (req, res) {
  console.log(path.join(projectPath, 'public', 'index.html'));
  res.sendFile(path.join(projectPath, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});