const express = require('express');
const BookDAO = require('../dao/book');

const bookDAO = new BookDAO()

exports.getBooks = (req, res) => {
    res = bookDAO.findAllBooks(req, res);
}

exports.saveBook = (req, res) => {
    res = bookDAO.saveBook(req.body, res);
}

exports.editBook = (req, res) => {
    res = bookDAO.editBook(req, res);
}

exports.deleteBook = (req, res) => {
    res = bookDAO.deleteBook(req, res);
}