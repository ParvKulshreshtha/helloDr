const express = require("express");
const { createUser, getAllUsers, login, signUp, getUserByToken } = require("../Controller/users");

const router = express.Router();

// User routes
router.post('/users', createUser);
router.get('/users', getAllUsers);
router.post('/login', login);
router.post('/signup', signUp);
router.get('/getuserbytoken', getUserByToken);

module.exports = router;