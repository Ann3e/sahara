
import React, { useRef, useState,useEffect } from 'react';
import { useParams } from 'react-router';
import api from '../services/api'

const VoiceExplanations = () => {
      const { id: questionId } = useParams(); 
      console.log()
  const [recording, setRecording] = useState(false);
  const [recordings, setRecordings] = useState([]);
  const mediaRecorderRef = useRef(null);
  const chunksRef = useRef([]);


  const handleStart = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const mediaRecorder = new MediaRecorder(stream);

    mediaRecorder.ondataavailable = (e) => {
      chunksRef.current.push(e.data);
    };

    mediaRecorder.onstop = async () => {
      const blob = new Blob(chunksRef.current, { type: 'audio/webm' });
      chunksRef.current = [];

      // 👇 Upload to Cloudinary here
      const cloudinaryUrl = await uploadToCloudinary(blob);
      console.log("Uploaded URL:", cloudinaryUrl);

      const timestamp = new Date();
      setRecordings(prev => [...prev, {
        url: cloudinaryUrl,
        time: timestamp,
        size: Math.round(blob.size / 1024) + " KB"
      }]);
    };

    mediaRecorderRef.current = mediaRecorder;
    mediaRecorder.start();
    setRecording(true);
  };

  const handleStop = () => {
    mediaRecorderRef.current?.stop();
    setRecording(false);
  };

  const attachAudioToQuestion = async (questionId, cloudinaryUrl) => {
    try {
      const res = await api.patch(`/api/dsa/questions/${questionId}/audio`, {
        audioUrl: cloudinaryUrl,
      });
    } catch (err) {
      console.error(' Failed to attach audio:', err);
    }
  };

  // ⬇️ Cloudinary Upload Function (You put this inside the component file)
  const uploadToCloudinary = async (blob) => {
    const sigRes = await api.get("/api/cloudinary-signature");
        console.log(sigRes.data)
    const { timestamp, signature, apiKey, cloudName, folder } = await sigRes.data;

    const formData = new FormData();
    formData.append("file", blob);
    formData.append("api_key", apiKey);
    formData.append("timestamp", timestamp);
    formData.append("signature", signature);
    formData.append("folder", folder);

    const uploadRes = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/video/upload`, {
      method: "POST",
      body: formData,
    });

    const data = await uploadRes.json();
    await attachAudioToQuestion(questionId,data.secure_url);
    return data.secure_url;
  };
  
  useEffect(() => {
  const fetchVoiceNote = async () => {
    try {

      const res = await api.get(`/api/dsa/questions/${questionId}`);

      const { voiceNoteUrl } = res.data.ques;
        // console.log(res.data)

      if (voiceNoteUrl) {
                console.log("yess")

        setRecordings([{
          url: voiceNoteUrl,
          time: new Date(), // optional placeholder
          size: 'Existing file' // no size info, just a label
        }]);
      }
    } catch (err) {
      console.error(" Failed to load existing audio:", err);
    }
  };

  fetchVoiceNote();
}, [questionId]);

return (
  <div className="p-6 max-w-2xl mx-auto bg-white rounded-2xl shadow-md space-y-6">
    <h2 className="text-2xl font-semibold text-gray-800">🎙️ Voice Explanation</h2>

    <button
      onClick={recording ? handleStop : handleStart}
      className={`px-6 py-2 rounded-lg text-white font-medium transition ${
        recording ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-500 hover:bg-blue-600'
      }`}
    >
      {recording ? '⏹️ Stop Recording' : '🎤 Start Recording'}
    </button>

    <div className="mt-4">
      <h3 className="text-lg font-medium text-gray-700 mb-2">📁 Recordings</h3>
      {recordings.length === 0 ? (
        <p className="text-gray-500">No recordings yet.</p>
      ) : (
        <ul className="space-y-4">
          {recordings.map((rec, idx) => (
            <li
              key={idx}
              className="p-4 border border-gray-200 rounded-lg flex flex-col gap-2 bg-gray-50"
            >
              <p className="text-sm text-gray-600">
                {rec.time.toLocaleString()} — <span className="italic">{rec.size}</span>
              </p>
              <audio controls src={rec.url} className="w-full" />
            </li>
          ))}
        </ul>
      )}
    </div>
  </div>
);

};

export default VoiceExplanations;

