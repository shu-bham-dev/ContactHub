const express = require('express')
const router = express.Router()
const {
    getUser,
    getCurrentUser,
    registerUser,
    loginUser,
} = require('../controllers/userController')

router.route('/').get(getUser).post(registerUser)
router.route('/me').get(getCurrentUser)
router.route('/login').post(loginUser)

module.exports = router
