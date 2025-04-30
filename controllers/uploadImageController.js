const Image = require('../models/Image');

// Store image in database
const uploadImage = async (req, res) => {
  try {
    const { description, imagePath } = req.body;

    // Validate input
    if (!description || !imagePath) {
      return res.status(400).json({ error: 'Description and imagePath are required.' });
    }

    // Create new image document
    const newImage = new Image({
      description,
      imagePath
    });

    // Save to DB
    const savedImage = await newImage.save();

    res.status(201).json({ message: 'Image uploaded successfully', data: savedImage });
  } catch (err) {
    console.error('Error uploading image:', err);
    res.status(500).json({ error: 'Server error while uploading image' });
  }
};

module.exports = {
  uploadImage
};
