const mongoose = require('mongoose');
const contactSchema = new mongoose.Schema({
    "name":{
        type:String,
        require:[true,"please add your name"],
        maxlength:50,
        minlength:2,
        trim:true
    },
    "phone":{
        type:Number,
        require:[true,"please add your number"],
        match: [/^(\+20|0)?1[0125][0-9]{8}$/,'Please provide a valid phone number'],
        unique:true
    },
    "address":{
        type:String,
        require:[true,"please add your address"],
        trim:true,
        maxlength:300
    },
    "note":{
        type:String,
        trim:true,
        maxlength:500
    }
})

module.exports = mongoose.model("Contact",contactSchema);