const express = require('express');
const { login, register, logout } = require('../controllers/auth');

const router = express.Router();

// Login route
router.post('/login', login);

// Signup route
router.post('/signup', register);

router.get('/logout', logout);

module.exports = router;
