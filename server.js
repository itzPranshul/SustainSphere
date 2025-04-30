const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const imageRoutes = require('./routes/ImageRoutes');
const contactRoutes = require('./routes/contactRoutes');
const connectDB = require('./config/db');

// Config
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve uploaded images
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/api/images', imageRoutes);
app.use('/api', contactRoutes);

// Default route
app.get('/', (req, res) => {
    res.send('Welcome to SustainSphere API');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
