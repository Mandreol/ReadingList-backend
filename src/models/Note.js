const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Note = sequelize.define('Note', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  content: { type: DataTypes.STRING, allowNull: false },
  date: { type: DataTypes.STRING, allowNull: false },
  bookId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Books',
      key: 'id',
    },
  },
});

module.exports = Note;
