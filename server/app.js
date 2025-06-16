
// Import and setup
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const dsaRoutes = require('./routes/dsaRoutes');
const dbConnect = require('./config/db');
const DsaQues = require('./models/DSAques'); // ✅ Adjust path as needed
const cloudinaryRoutes = require('./routes/cloudinary');
const protect = require('./middlewares/protect');

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors({
  origin: 'https://sahara-frontend-cyau.onrender.com',
  credentials: true
}));app.use(express.json());

 dbConnect();
app.get('/', (req, res) => {
  res.send('✅ Backend is live');
});
// Routes
app.use('/api/auth', userRoutes);
app.use('/api/dsa', dsaRoutes);
app.use('/api', cloudinaryRoutes);
// app.use('/api/ai/generate-questions',protect,generateInterviewQuestions);
// app.use('/api/ai/generate-feedback',protect,generateFeedback);


    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
