const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Book = sequelize.define('Book', {
  id: { type: DataTypes.STRING, allowNull: false, primaryKey: true },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  author: {
    type: DataTypes.STRING,
  },

  imgUrl: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  recommendationDate: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  state: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  initializationDate: {
    type: DataTypes.STRING,
  },
  finishDate: {
    type: DataTypes.STRING,
  },
  pagesRead: {
    type: DataTypes.STRING,
  },
  notes: {
    type: DataTypes.STRING,
  },
});

module.exports = Book;
