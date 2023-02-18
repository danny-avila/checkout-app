const { DataTypes } = require('sequelize');
const sequelize = require('./connect');

const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  addr_1: {
    type: DataTypes.STRING,
    allowNull: false
  },
  addr_2: {
    type: DataTypes.STRING,
    allowNull: false
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false
  },
  state: {
    type: DataTypes.STRING,
    allowNull: false
  },
  zip: {
    type: DataTypes.STRING,
    allowNull: false
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false
  },
  credit_card: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cc_expiry: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cc_cvv: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cc_zip: {
    type: DataTypes.STRING,
    allowNull: false
  },
});

const Session = sequelize.define('Session', {
  sid: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true
  },
  expires: {
    type: DataTypes.DATE,
    allowNull: false
  },
  data: {
    type: DataTypes.TEXT,
    allowNull: true
  }
}, {
  tableName: 'sessions', // set the table name to 'sessions'
  underscored: true // use underscored naming convention for columns
});

// establish a relationship between the User and Session models
User.hasMany(Session, { onDelete: 'CASCADE', onUpdate: 'CASCADE' });
Session.belongsTo(User);

async function syncDatabase() {
  await sequelize.sync({ force: true });
  console.log('Database synced!');
}

syncDatabase();