const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('checkout', 'root', '1234', {
  host: 'localhost',
  dialect: 'mysql',
});

sequelize.authenticate().then(() => {
  console.log(`Database connected to myql checkout`)
}).catch((err) => {
  console.log(err)
});

// Test connection
// (async () => {
// try {
//   await sequelize.authenticate();
//   console.log('Connection has been established successfully.');
// } catch (error) {
//   console.error('Unable to connect to the database:', error);
// }
// })();

module.exports = sequelize;