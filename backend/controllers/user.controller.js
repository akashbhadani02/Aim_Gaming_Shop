const { createConnection } = require("mysql2");
const { config } = require("../config/config.js");
const validate = require("../middlewares/validate.js");
const { createUserValidation } = require("../validation.js");

/* ------------------------------- create user ------------------------------ */
const createUser = async (req, res) => {
    const connection = createConnection(config);
    try {
        await connection.connect();



    } catch (error) {
        console.log("Connection error", error);
    } finally {
        await connection.end();
    }
}


module.exports = {
    createUser
}