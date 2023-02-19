const { DataTypes } = require('sequelize');
const sequelize = require('./connect');

const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
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
    allowNull: false,
    defaultValue: ''
  },
  addr_2: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: ''
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: ''
  },
  state: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: ''
  },
  zip: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: ''
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: ''
  },
  credit_card: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: ''
  },
  cc_expiry: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: ''
  },
  cc_cvv: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: ''
  },
  cc_zip: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: ''
  },
});

const Session = sequelize.define('Session', {
  sid: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true
  },
  userId: {
    type: DataTypes.INTEGER, // assuming that the user ID is an integer
    allowNull: true,
    field: 'user_id', // specify the column name in the table
    references: {
      model: 'Users', // name of the User model
      key: 'id' // name of the primary key of the User model
    }
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
  tableName: 'Sessions', // set the table name to 'sessions'
  timestamps: false, // disable timestamps
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