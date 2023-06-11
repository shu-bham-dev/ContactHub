const asyncHandler = require('express-async-handler');

const getContacts = (req,res) =>{
    res.status(200).json({message:"Get all contacts"})
}

const postContacts =asyncHandler(async (req,res)=>{
    console.log(req.body);
    const {name,email,phone} = req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All fields must be present");
    }
    res.status(200).json({message: "Create contacts"})
})

const getContactByid = asyncHandler(async (req,res)=>{
    res.status(200).json({message: `Create contacts for ${req.params.id}`})
})

const updateContact = asyncHandler(async (req,res)=>{
    res.status(200).json({message: `Update contacts for ${req.params.id}`})
})

const deleteContact = asyncHandler(async (req,res)=>{
    res.status(200).json({message: `Delete contacts for ${req.params.id}`})
})

module.exports = {deleteContact, updateContact,getContactByid, postContacts,getContacts}