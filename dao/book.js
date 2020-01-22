const models = require('../models')
const Sequelize = require('sequelize');
const op = Sequelize.Op;

class BookDAO {
    findAllBooks(req, res) {
        if (req.query.search) {
          let search = req.query.search
          models.Book.findAll({ where: {title: { [op.like]: '%'+ search +'%' } }, raw: true}).then(books => {
              res.json({books});
          })
          .catch(err => console.log(err));
        } else {
          models.Book.findAll().then(books => {
              res.json({books});
          })
          .catch(err => console.log(err));
        }
    };
    
    saveBook(data, res) {
        models.Book.build(data)
        .save()
        .then(result => {
            res.json({book: result});
        })
        .catch(err => {
            console.log(err);
        })

    };

    editBook(req, res) {
        let pk = req.query.pk
        let data = req.body
        models.Book.findByPk(pk).then(book => {
            book.title = data.title
            book.descr = data.descr
            book.save().then(book => {
                res.json({ book: book})
            }).catch(err => {
                console.log(err)
            })
        })
        .catch((err) => {
            console.log(err);
        })
    };

    deleteBook(req, res) {
        let pk = req.query.pk
        models.Book.findByPk(pk).then(book => {
            book.destroy({ force: true });
            res.json({ book: book})
        })
        .catch((err) => {
            console.log(err);
        })
    };
}

module.exports = BookDAO;