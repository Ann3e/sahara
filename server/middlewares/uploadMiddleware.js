const multer = require('multer');
const cloudinary = require('../config/cloudinary');

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'voice_explanationd',
    resource_type: 'video', // Required for webm or mp3
    format: async (req, file) => 'webm',
    public_id: (req, file) => `voice_${Date.now()}`,
  },
});

const upload = multer({ storage });
module.exports = upload;
