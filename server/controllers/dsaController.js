// For CRUD logic for DSA Questions
// create- add a new dsa ques
//read=get all dsa ques/ filtered
//update= update status/notes/audio of a particalur ques
//del-remove a dsa ques


const DsaQues= require('../models/DSAques');
const User= require('../models/user');


const createQues = async (req, res) => {
  try {
    const { title, topic, quesLink, status, notes, voiceNoteUrl } = req.body;
    console.log("Incoming body:", req.body); // ✅ LOG

    const newQues = new DsaQues({
      userId: req.user._id, // Attach current user
      title,
      topic,
      quesLink,
      status,
      notes,
      voiceNoteUrl,
    });

    await newQues.save();

    res.status(201).json({ message: "Question added", success: true, data: newQues });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", success: false });
  }
};

const getQues = async (req, res) => {
  try {
    // const questions = await DsaQues.find({ user: req.userId }).sort({ createdAt: -1 });
    // const questions = await DsaQues.find().populate("userId");
const questions = await DsaQues.find({ userId: req.user._id }).sort({ createdAt: -1 });

    res.status(200).json({ success: true, data: questions });
  } catch (error) {
    console.error("Fetch error:", error);
    res.status(500).json({ message: "Internal server error", success: false });
  }
};

// Get a single DSA question 
const getQuesById = async (req, res) => {
  try {
    const ques = await DsaQues.findOne({ _id: req.params.id, userId: req.user._id });

    if (!ques) {
      return res.status(404).json({ message: "Question not found", success: false });
    }

    res.status(200).json({ success: true, ques });
  } catch (error) {
    console.error("Get by ID error:", error);
    res.status(500).json({ message: "Internal server error", success: false });
  }
};

// Delete a question
const deleteQues = async (req, res) => {
  try {
    const deleted = await DsaQues.findOneAndDelete({ _id: req.params.id, userId: req.user._id });

    if (!deleted) {
      return res.status(404).json({ message: "Question not found", success: false });
    }

    res.status(200).json({ message: "Question deleted", success: true });
  } catch (error) {
    console.error("Delete error:", error);
    res.status(500).json({ message: "Internal server error", success: false });
  }
};

//  Update a question
const updateQues = async (req, res) => {
  try {
    const { status, notes, audioNote } = req.body;

    const updatedQues = await DsaQues.findOneAndUpdate(
      { _id: req.params.id, userId: req.user._id },
      { status, notes, audioNote },
      { new: true }
    );

    if (!updatedQues) {
      return res.status(404).json({ message: "Question not found", success: false });
    }

    res.status(200).json({ message: "Question updated", success: true, data: updatedQues });
  } catch (error) {
    console.error("Update error:", error);
    res.status(500).json({ message: "Internal server error", success: false });
  }
};

module.exports = {
  createQues,
  getQues,
  getQuesById,
  deleteQues,
  updateQues,
};