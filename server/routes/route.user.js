const router = require("express").Router();
const {
  REGISTER_USER,
  LOGIN_USER,
  AUTO_LOGIN,
  LOGOUT_USER,
  CHANGE_USERNAME,
  CHANGE_PASSWORD,
} = require("../controllers/controller.user");

router.post("/register", REGISTER_USER);
router.post("/login", LOGIN_USER);
router.get("/login/auto", AUTO_LOGIN);
router.patch("/edit/username/:id", CHANGE_USERNAME);
router.patch("/edit/password/:id", CHANGE_PASSWORD);
router.delete("/logout", LOGOUT_USER);

module.exports = router;
