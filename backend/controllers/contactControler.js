const getContacts = (req,res) =>{
    res.status(200).json({message:"Get all contacts"})
}

const postContacts = (req,res)=>{
    console.log(req.body);
    res.status(200).json({message: "Create contacts"})
}

const getContactByid = (req,res)=>{
    res.status(200).json({message: `Create contacts for ${req.params.id}`})
}

const updateContact = (req,res)=>{
    res.status(200).json({message: `Update contacts for ${req.params.id}`})
}

const deleteContact = (req,res)=>{
    res.status(200).json({message: `Delete contacts for ${req.params.id}`})
}

module.exports = {deleteContact, updateContact,getContactByid, postContacts,getContacts}