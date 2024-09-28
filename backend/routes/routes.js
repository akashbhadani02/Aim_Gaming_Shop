const router = require("express").Router();
const { createUser } = require("../controllers/user.controller.js");

router.post("/create_user", createUser);

module.exports = router;