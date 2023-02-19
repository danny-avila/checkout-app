
const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db/connect');

class Session extends Model {}

Session.init({
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
  },
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  timestamps: false,
  modelName: 'Session' // We need to choose the model name
});

Session.sync();

module.exports = {
  create: async (session) => {
    try {
      return await Session.create(session);
    } catch (error) {
      console.log(error);
    }
  },
  read: (session) => Session.findOne({ where: session }),
  update: (session) => Session.update(session, { where: { email: session.email } }),
  delete: (session) => Session.destroy({ where: session })
};