const router = require("express").Router();
const { createUser, login } = require("../controllers/user.controller.js");

router.post("/create_user", createUser);
router.post("/login", login);


module.exports = router;