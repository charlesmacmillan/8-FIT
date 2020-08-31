const router = require("express").Router();
const usersCtrl = require("../controllers/users");

// GET /users
router.get("/users", usersCtrl.index);
router.get("/users/:id", usersCtrl.show);

module.exports = router;
