const express = require('express')
const {getBooks, saveBook, editBook, deleteBook, getSearchBook} = require('../controllers/book')
const validator = require('../validator')
const router = express.Router()

router.get('/', getBooks)
router.post('/save', validator.saveBookValidator, saveBook)
router.put('/edit', validator.saveBookValidator, editBook)
router.delete('/delete', deleteBook)

module.exports = router