const express = require("express");
const router = express.Router();
const path = require("path");
/*
router.get("/",(req,res)=>{
    res.sendFile(path.resolve("views/home.html"));


});
router.get("/about",(req,res)=>{
    res.sendFile(path.resolve("views/about.html"));


});
*/
const maicontroller = require("../controllers/maincontrollers");
router.get("/",maicontroller.index)
router.get("/about",maicontroller.about)


module.exports= router;
