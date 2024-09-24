const express = require('express');
const router = express.Router();
router.get('/',(req,res)=>{
    res.send("d")
})
.post("/:id",(req,res)=>{
    console.log("post route")
})
.patch("/:id",(req,res)=>{
    console.log("put route")
})
.delete("/:id",(req,res)=>{
    console.log("delete route")
})

module.exports = router