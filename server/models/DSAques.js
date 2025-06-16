const mongoose= require('mongoose');

const dsaSchema= new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
    },
    title: String,
    topic: String,
    quesLink:String,
    status: {
        type: String,
        enum: ['Not Started', 'In Progress', 'Solved'],
        default: 'Not Started'
    },
    notes: String,
    voiceNoteUrl: String, // audio file path or S3 URL
    createdAt: Date,
    updatedAt: Date
})

const dsaModel=mongoose.model('DsaQues',dsaSchema);
module.exports =dsaModel;