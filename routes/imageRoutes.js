const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');
const Image = require('../models/Image'); // <-- import the model

// Store image and description in DB
router.post('/upload', upload.single('photo'), async (req, res) => {
  try {
    const description = req.body.description;
    const filePath = req.file?.path;

    if (!description || !filePath) {
      return res.status(400).json({ error: 'Image and description are required.' });
    }

    // Save to MongoDB
    const newImage = new Image({
      description,
      imagePath: filePath
    });

    const savedImage = await newImage.save();

    return res.status(201).json({
      message: 'Image uploaded and saved to database successfully',
      data: savedImage
    });
  } catch (error) {
    console.error('Upload error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
