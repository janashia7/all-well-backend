const express = require('express');
const {
  resetPasswordRequest,
  resetPassword,
} = require('../controllers/reset-password');

const router = express.Router();

router.post('/reset-password-request', resetPasswordRequest);

// Signup route
router.post('/reset-password/:token', resetPassword);

module.exports = router;
