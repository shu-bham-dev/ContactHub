const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')

const verifyToken = asyncHandler(async (req, res, next) => {
    const authHeader = req.headers.authorization || req.headers.Authorization
    let token
    if (authHeader && authHeader.startsWith('Bearer')) {
        token = authHeader.split(' ')[1]
        console.log('token', token)
        jwt.verify(token, 'SECRETJWT', (err, decoded) => {
            if (err) {
                res.status(401)
                throw new Error('User not authorized')
            }
            req.user = decoded.user
            next()
        })
        if (!token) {
            res.status(401)
            throw new Error('User is not authorised or token is missing')
        }
    }
})

module.exports = verifyToken
