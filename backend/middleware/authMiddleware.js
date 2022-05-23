const jwt = require('jsonwebtoken');
const { jwtSecret } = process.env;
const logger = require('../lib/logger');
const { body, validationResult, query, param } = require('express-validator');
const villager = require('../models/villager');
const agent = require('../models/agent');
const bcrypt = require('bcryptjs');

exports.auth = (req, res, next) => {
    try {
        const token = req.header('x-auth-token');
        if (!token) {
            return res.status(403).json({ massage: 'Access Denied.' })
        }
        const decoded = jwt.verify(token, jwtSecret);
        req.user = decoded;
        next();
    } catch (error) {
        logger.error(error.massage);
        return res.status(400).json({ message: error.message });
    }
}

exports.address = (req, res, next) => {
    req.body["address"] = {
        houseNumber: req.body.houseNumber,
        subDistrict: req.body.subDistrict,
        district: req.body.district,
        province: req.body.province,
        postalCode: req.body.postalCode
    }
    next();
}

exports.midVillagerSignUp = [
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
    body("password").isString().not().isEmpty(),
    body("houseNumber").isString().not().isEmpty(),
    body("subDistrict").isString().not().isEmpty(),
    body("district").isString().not().isEmpty(),
    body("province").isString().not().isEmpty(),
    body("postalCode").isString().isLength({ max: 5, min: 5 }).not().isEmpty(),
]

exports.midAgentSignUp = [
    body("firstName").isString().not().isEmpty(),
    body("lastName").isString().not().isEmpty(),
    body("agentPin").isString().not().isEmpty(),
    body("email").isEmail().not().isEmpty(),
    body("password").isString().not().isEmpty(),
    body("jobTitle").isString().not().isEmpty(),
    body("phoneNum").isString().isLength({ max: 10, min: 10 }).not().isEmpty(),
]

exports.midLogin = [
    body("email").isEmail().not().isEmpty(),
    body("password").isString().not().isEmpty()
]

exports.reset = async (req, res, next) => {
    try {
        let { email, oldPass } = req.body;
        const Vdata = await villager.findOne({ email: email });
        const Adata = await agent.findOne({ email: email });
        if (Vdata) {
            let result = bcrypt.compareSync(oldPass, Vdata.password);
            req.body["result"] = result;
            req.body["key"] = 'V';
            next();
        } else if (Adata) {
            let result = bcrypt.compareSync(oldPass, Adata.password);
            req.body["key"] = 'A';
            next();
        } else {
            if (!Vdata && !Adata) {
                req.body["result"] = false;
                next();
            }
        }
    } catch (error) {
        logger.error(error.massage);
        return res.status(400).json({ message: error.message });
    }
}