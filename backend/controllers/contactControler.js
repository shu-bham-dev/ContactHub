const asyncHandler = require('express-async-handler')
const contactSchema = require('../models/contactModel')
const { mongoose } = require('mongoose')

const getContacts = async (req, res) => {
    const Contacts = await contactSchema.find()
    res.status(200).json(Contacts)
}

const postContacts = asyncHandler(async (req, res) => {
    console.log(req.body)
    const { name, email, phone } = req.body
    if (!name || !email || !phone) {
        res.status(400)
        throw new Error('All fields must be present')
    }
    const contact = await contactSchema.create({
        name,
        phone,
        email,
    })
    res.status(200).json(contact)
})

const getContactByid = asyncHandler(async (req, res) => {
    const contactByID = await contactSchema.findById(req.params.id)
    if (!contactByID) {
        res.status(404)
        throw new Error('Contact not found')
    }
    res.status(200).json(contactByID)
})

const updateContact = asyncHandler(async (req, res) => {
    const contactByID = await contactSchema.findById(req.params.id)
    if (!contactByID) {
        res.status(404)
        throw new Error('Contact not found')
    }
    const updatedContact = await contactSchema.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    )
    res.status(200).json(updateContact)
})

const deleteContact = asyncHandler(async (req, res) => {
    const contact = await contactSchema.findByIdAndDelete(req.params.id)
    if (!contact) {
        res.status(404)
        throw new Error('Contact not found')
    }
    res.status(200).json(contact)
})

module.exports = {
    deleteContact,
    updateContact,
    getContactByid,
    postContacts,
    getContacts,
}
