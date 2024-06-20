const express = require("express");
const UserController = require("../controllers/userContoller");
const userContoller = require("../controllers/userContoller");

const router = express.Router();

router.post("/", userContoller.createUser);

module.exports = router;
