// models/Image.js
const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  description: { type: String, required: true },
  imagePath: { type: String, required: true },
  uploadedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Image', imageSchema);
