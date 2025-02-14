const express = require('express');
const userController = require('../controllers/user.controller');
const { authenticate } = require('../middleware/auth.middleware');

const router = express.Router();

router.get('/search', authenticate, userController.searchUsers);
router.get('/profile', authenticate, userController.getUserProfile);

module.exports = router;