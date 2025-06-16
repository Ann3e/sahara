// routes/cloudinary.js
const express = require('express');
const router = express.Router();
const cloudinary = require('../config/cloudinary');

router.get('/cloudinary-signature', (req, res) => {
    console.log("got")
  const timestamp = Math.floor(Date.now() / 1000);
  const signature = cloudinary.utils.api_sign_request(
    { timestamp, folder: 'voice-recordings' },
    process.env.CLOUDINARY_API_SECRET
  );

  res.json({
    timestamp,
    signature,
    apiKey: process.env.CLOUDINARY_API_KEY,
    cloudName: process.env.CLOUDINARY_CLOUD_NAME,
    folder: 'voice-recordings',
  });
});

module.exports = router;
