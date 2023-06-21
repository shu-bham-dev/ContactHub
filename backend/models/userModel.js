const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, 'username is required field'],
        },
        email: {
            type: String,
            required: [true, 'email is a required field'],
            unique: [true, 'email is already used'],
        },
        password: {
            type: String,
            required: (true, 'password is a required field'),
        },
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('UserSchema', userSchema)
