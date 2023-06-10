const express = require('express');
const app = express();
const port = 4000;

app.listen(port,()=>{
    console.log("Server listening on ",port);
});

app.get('/api/contacts',(req,res)=>{
    res.json({message: "Get all contacts"})
});
