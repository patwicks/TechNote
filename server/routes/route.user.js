const router = require("express").Router();
const { REGISTER_USER, LOGIN_USER } = require("../controllers/controller.user");

router.post("/register", REGISTER_USER);
router.post("/login", LOGIN_USER);

module.exports = router;
