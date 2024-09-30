const mysql = require("mysql2/promise");
const { config } = require("../config/config.js");
const validate = require("../middlewares/validate.js");
const { createUserValidation } = require("../validation.js");

/* ------------------------------- create user ------------------------------ */
const createUser = async (req, res) => {
    const connection = await mysql.createConnection(config);
    try {
        await connection.connect();

        const sql_query = `INSERT INTO users (f_name, l_name, email, password, address, phone) values (?, ?, ?, ?, ?, ?)`;
        const params = [
            req.body.f_name,
            req.body.l_name,
            req.body.email,
            req.body.password,
            req.body.address,
            req.body.phone
        ];

        const result = await connection.query(sql_query, params);

        return res.status(200).send({ message: "success", code: 0 });
    } catch (error) {
        return res.status(401).send({ code: 1, message: "failed", error: error.message });
    } finally {
        await connection.end();
    }
}

/* ------------------------------ Login routes ------------------------------ */
const login = async (req, res) => {
    const connection = await mysql.createConnection(config);

    try {
        const { email, phone, password } = req.body;

        if (!email || !phone || !password) {
            return res.status(400).send({ code: 1, message: "Missing credentials" });
        }

        const query = `SELECT * FROM users WHERE email = ? AND password = ? AND phone = ?`;
        const params = [email, password, phone];

        const [result] = await connection.query(query, params);

        if (result.length > 0) {
            return res.status(200).send({ code: 0, message: "Login successful", data: result[0] });
        } else {
            return res.status(401).send({ code: 1, message: "Invalid credentials" });
        }
    } catch (error) {
        return res.status(500).send({ code: 1, message: "Internal server error", error: error.message });
    } finally {
        await connection.end();
    }
};


module.exports = {
    createUser,
    login
}