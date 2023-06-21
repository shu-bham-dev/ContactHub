const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: (true, 'This is a required field'),
        },
        password: {
            type: String,
            required: (true, 'This is a required field'),
        },
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('UserSchema', userSchema)
