module.exports = (reqBody, schema) => {
    if (typeof schema != "undefined") {
        const validateData = schema.validate(reqBody);

        if (validateData.error && validateData.error !== null) {
            return validateData.error.message;
        }
    }
}