const mongoose = require('mongoose');

const connectDB=async()=>{
    try{
    const connect = await mongoose.connect("mongodb+srv://admin:admin@cluster0.9gzeagu.mongodb.net/contacthub-backend");
    console.log("Connecting to",connect.connection.host,connect.connection.name);
    }catch(e){
        console.log(e);
        process.exit(1);
    }
}

module.exports = connectDB;