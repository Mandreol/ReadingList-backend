const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');
const Note = sequelize.define('note', {
  id: { type: DataTypes.STRING, allowNull: false, primaryKey: true },
  body: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: { type: DataTypes.STRING, allowNull: false },
  //bookId
});

module.exports = Note;
