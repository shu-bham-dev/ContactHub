const express = require('express')
const errorHandler = require('./middleware/errorHandler')
const connectDB = require('./config/dbConnection')
const app = express()
const port = 4000

connectDB()
app.listen(port, () => {
    console.log('Server listening on ', port)
})

app.use(express.json())
app.use('/api/contacts', require('./routes/contactRoutes'))
app.use('/api/user', require('./routes/userRoutes'))
app.use(errorHandler)
