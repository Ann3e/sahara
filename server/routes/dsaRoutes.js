const express=require('express')
const router=express.Router()
const protect = require("../middlewares/protect");
const {createQues, getQues, getQuesById, deleteQues} =require('../controllers/dsaController');
const dsaModel = require('../models/DSAques');

//route middleware controller
router.post('/questions',protect,createQues);
router.get('/questions',protect,getQues)
router.delete('/questions/:id',protect,deleteQues)
router.get('/questions/:id',protect,getQuesById)

// routes/dsaRoutes.js
router.patch('/questions/:id/audio', async (req, res) => {

  const { audioUrl } = req.body;
  if (!audioUrl) return res.status(400).json({ message: 'Audio URL required' });

  
  try {

    const updated = await dsaModel.findByIdAndUpdate(
      req.params.id ,
      { voiceNoteUrl:audioUrl },
      { new: true }
    );

    if (!updated) return res.status(404).json({ message: 'Question not found' });

    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

module.exports = router;