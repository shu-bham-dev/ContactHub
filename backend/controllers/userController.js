const asyncHandler = require('express-async-handler')
const userSchema = require('../models/userModel')

const getUser = asyncHandler(async (res, req) => {
    const allUser = await userSchema.find()
    if (!allUser) {
        res.status(404)
        throw new Error('No user is found')
    }
    res.status(200).json(allUser)
})

const getCurrentUser = asyncHandler(async (res, req) => {
    const currentUser = 'xx'
    res.status(200).json('The current User is ', currentUser)
})

module.exports = { getUser, getCurrentUser }
