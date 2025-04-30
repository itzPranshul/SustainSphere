const Contact = require('../models/Contact');

const submitContactForm = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const newContact = new Contact({
      name,
      email,
      message
    });

    const savedContact = await newContact.save();

    res.status(201).json({
      message: 'Contact form submitted successfully',
      data: savedContact
    });
  } catch (error) {
    console.error('Error saving contact form:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  submitContactForm
};
