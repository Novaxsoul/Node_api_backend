'use strict';
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    title: DataTypes.STRING,
    descr: DataTypes.TEXT
  }, {});
  Book.associate = function(models) {
    // associations can be defined here
  };
  return Book;
};

