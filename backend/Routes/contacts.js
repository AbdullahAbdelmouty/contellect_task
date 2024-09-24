const express = require('express');
const router = express.Router();
const {getContacts,updateContact,createContact,deleteContact} = require('../Controllers/contacts')
router.get('/',getContacts)
.post("/:id",createContact)
.patch("/:id",updateContact)
.delete("/:id",deleteContact)

module.exports = router