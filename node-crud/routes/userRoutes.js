const express = require("express");
const userContoller = require("../controllers/userContoller");

const router = express.Router();

router.post("/", userContoller.createUser);
router.get("/", userContoller.getAllUsers);

module.exports = router;
