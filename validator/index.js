const { check, validationResult } = require('express-validator');

exports.saveBookValidator = (req, res, next) => {
    req.check('title', 'Escribe un título').notEmpty();
    req.check('title', 'El título debe tener como mínimo 4 caracteres y máximo 255 caracteres').isLength({
        min: 4,
        max: 255
    });
    req.check('descr', 'Escribe una descripción').notEmpty();
    req.check('descr', 'La descripción debe tener como mínimo 4 caracteres y máximo 2000 caracteres').isLength({
        min: 4,
        max: 2000
    });

    // Revisa errores
    const errors = req.validationErrors()

    if (errors) {
        const firstError = errors.map((error) => error.msg)[0];
        return res.status(400).json({error: firstError});
    }


    next()
}