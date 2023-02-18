const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db/connect');

class User extends Model {}

User.init(
  {
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
      type: DataTypes.STRING
    },
    addr_2: {
      type: DataTypes.STRING
    },
    city: {
      type: DataTypes.STRING
    },
    state: {
      type: DataTypes.STRING
    },
    zip: {
      type: DataTypes.STRING
    },
    phone: {
      type: DataTypes.STRING
    },
    credit_card: {
      type: DataTypes.STRING
    },
    cc_expiry: {
      type: DataTypes.STRING
    },
    cc_cvv: {
      type: DataTypes.STRING
    },
    cc_zip: {
      type: DataTypes.STRING
    }
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'User' // We need to choose the model name
  }
);

User.sync();

module.exports = {
  create: async (user) => {
    try {
      return await User.create(user);
    } catch (error) {
      console.log(error);
    }
  },
  read: (user) => User.findOne({ where: user }),
  update: (user) => User.update(user, { where: { email: user.email } }),
  delete: (user) => User.destroy({ where: user })
};