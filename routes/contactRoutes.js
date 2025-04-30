const express = require('express');
const router = express.Router();
const { submitContactForm } = require('../controllers/contactController');
const validateContact = require('../middleware/validateContact');

// POST /api/contact
router.post('/contact', validateContact, submitContactForm);

module.exports = router;
