
const { DataTypes, Model } = require('sequelize');
import { sequelize } from '../db/connect';

class Session extends Model {}

Session.init({
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
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'Session' // We need to choose the model name
});

module.exports = Session;