const express =require("express");
const { isAbsolute } = require("path");
const app = express();
const port = 3000;
const path = require("path");
app.use(express.static("public"));



app.get("/",(req,res)=>{
    res.sendFile(path.resolve("views/home.html"));


});
app.get("/about",(req,res)=>{
    res.sendFile(path.resolve("views/about.html"));


});


app.listen(port,()=>{
    console.log("servidor corriendo en el puerto 3000");
});