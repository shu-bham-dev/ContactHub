const express = require('express')
const router = express.Router()
const {
    getUser,
    getCurrentUser,
    registerUser,
    loginUser,
} = require('../controllers/userController')
const verifyToken = require('../middleware/tokenValidator')

router.route('/').get(getUser).post(registerUser)
router.route('/me').get(verifyToken, getCurrentUser)
router.route('/login').post(loginUser)

module.exports = router
