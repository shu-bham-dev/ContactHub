const express = require('express')
const router = express.Router()
const { getUser, getCurrentUser } = require('../controllers/userController')

router.route('/').get(getUser)
router.route('/me').get(getCurrentUser)

module.exports = router
