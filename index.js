const express = require("express");
const Route = require("./route.js");
const app = express();
const port = 5000;
const cors = require("cors")

app.use(express.static("public")) 
app.use(cors()) 
app.use(Route);

app.get("*",(req,res) => {
    return res.sendFile(__dirname + "/index.html")
})

app.listen(port,() => console.log("Serve On"))