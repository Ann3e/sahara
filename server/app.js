
// Import and setup
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const dsaRoutes = require('./routes/dsaRoutes');
const dbConnect = require('./config/db');
const DsaQues = require('./models/DSAques'); // ✅ Adjust path as needed
const cloudinaryRoutes = require('./routes/cloudinary');

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

 dbConnect();
// Routes
app.use('/api/auth', userRoutes);
app.use('/api/dsa', dsaRoutes);
app.use('/api', cloudinaryRoutes);


    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
