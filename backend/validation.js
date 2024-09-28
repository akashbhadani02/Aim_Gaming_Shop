const Joi = require("joi");

/* ------------------------- Create user validation ------------------------- */
exports.createUserValidation = Joi.object().keys({
    f_name: Joi.string().trim().required(),
    l_name: Joi.string().trim().required(),
    email: Joi.string().trim().email().required(),
    password: Joi.string().trim().required(),
    address: Joi.string().trim()
});