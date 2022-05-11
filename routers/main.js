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
const maincontroller = require("../controllers/maincontrollers");
router.get("/",maincontroller.index)
router.get("/about",maincontroller.about)


module.exports= router;
