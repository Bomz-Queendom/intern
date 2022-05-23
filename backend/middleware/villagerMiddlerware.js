const { body, validationResult, query, param } = require('express-validator');

exports.midVillagerDetail = [
    body("firstName").isString().not().isEmpty(),
    body("lastName").isString().not().isEmpty(),
    body("age").isInt().not().isEmpty(),
    body("gender").isString().not().isEmpty(),
    body("religion").isString().not().isEmpty(),
    body("ethnicity").isString().not().isEmpty(),
    body("nationality").isString().not().isEmpty(),
    body("phoneNum").isString().not().isEmpty(),
    body("dateOfBirth").isDate().not().isEmpty(),
    body("idCard").isString().isLength({ min: 13 }).not().isEmpty(),
    body("email").isEmail().not().isEmpty(),
    body("houseNumber").isString().not().isEmpty(),
    body("subDistrict").isString().not().isEmpty(),
    body("district").isString().not().isEmpty(),
    body("province").isString().not().isEmpty(),
    body("postalCode").isString().isLength({ max: 5, min: 5 }).not().isEmpty(),
]

exports.midId = param("id").isMongoId().not().isEmpty();