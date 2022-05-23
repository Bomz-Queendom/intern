const { body, param, query } = require('express-validator');


exports.midCreate = [
    param("id").isMongoId().notEmpty(),
    body("petitionType").isString().not().isEmpty(),
    body("problemDetail").isString().not().isEmpty(),
    body("needCorrective").isString().not().isEmpty(),
    body("status").isString().not().isEmpty(),
]

exports.midID = [
    param("id").isMongoId().notEmpty(),
]

exports.midFilter = [
    query("status").isString()
]

exports.midUpdate = [
    param("id").isMongoId(),
    //body("status").isString()
]