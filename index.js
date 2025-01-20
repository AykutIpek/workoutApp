require('dotenv').config();


const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const cors = require('cors');


const JWT_SECRET = process.env.JWT_SECRET;

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use('/auth', authRoutes);

// Test Route
app.get('/', (req, res) => {
  res.send('Fitness Backend API is running!');
});

// Sunucuyu başlat
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));