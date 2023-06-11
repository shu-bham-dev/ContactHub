const express = require('express');
const { postContacts, getContactByid, updateContact, deleteContact, getContacts } = require('../controllers/contactControler');
const router = express.Router();

router.route('/').get(getContacts).post(postContacts);
router.route('/:id').get(getContactByid).put(updateContact).delete(deleteContact);

module.exports = router;