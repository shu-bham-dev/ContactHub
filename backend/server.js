const express = require('express');
const app = express();
const port = 4000;

app.listen(port,()=>{
    console.log("Server listening on ",port);
});

app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"));
