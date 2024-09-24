const Contacts = require('../Models/contact');

// get all contacts
const getContacts = async (req,res)=>{
    res.status(200).json({"msg":"done"})
}

// create contact
const createContact = async (req,res)=>{
    res.status(201).json({"msg":"done"})
}

// update contact
const updateContact = async(req,res)=>{
    res.status(200).json({"msg":"done"})
}

// delete contact
const deleteContact = async(req,res)=>{
    res.status(200).json({"msg":"done"})
}
module.exports = {
    getContacts,
    createContact,
    updateContact,
    deleteContact
}