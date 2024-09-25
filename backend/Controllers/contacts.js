const Contacts = require('../Models/contact');
const mongoose = require('mongoose')
// get all contacts
const getContacts = async (req,res)=>{
    
    //pages
    const page = Number(req.query.page) || 1;
    const limit = 5;
    const skip = (page - 1)*limit;
    const contacts = await Contacts.find({}).skip(skip).limit(limit);
    res.status(200).json(contacts)
}

// create contact
const createContact = async (req,res)=>{
    let {name,phone,address,note} = req.body;
    if(!name){
        res.status(400).json({msg:"please add your name"});
    }
    if(!phone){
        res.status(400).json({msg:"please add your phone"});
    }
    if(!address){
        res.status(400).json({msg:"please add your address"});
    }
    phone = parseFloat(phone.toString().slice(1))
    Contacts.create({name,phone,address,note})
    res.status(201).json({"msg":"done"})
}

// update contact
const updateContact = async(req,res)=>{
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({error: 'contact not exist'})
    }
  
    const contact = await Contacts.findOneAndUpdate({_id: id}, {
      ...req.body
    })
  
    if (!contact) {
      return res.status(400).json({error: 'contact not exist'})
    }
  
    res.status(200).json(contact)
}

// delete contact
const deleteContact = async(req,res)=>{
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({error: 'contact not exist'})
    }
  
    const contact = await Contacts.findOneAndDelete({_id: id})
  
    if (!contact) {
      return res.status(400).json({error: 'contact not exist'})
    }
  
    res.status(200).json(contact)
}
module.exports = {
    getContacts,
    createContact,
    updateContact,
    deleteContact
}