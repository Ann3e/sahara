// import React, { useState } from 'react';
// import { Mic, RefreshCcw, Send } from 'lucide-react';
// import Navbar from '../components/Navbar';
// import api from '../services/api'; // Assumes Axios wrapper

// const InterviewPrep = () => {
//   const [topic, setTopic] = useState('');
//   const [question, setQuestion] = useState('');
//   const [answer, setAnswer] = useState('');
//   const [feedback, setFeedback] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleGenerateQuestion = async () => {
//     if (!topic.trim()) {
//       alert("Please enter a topic to focus on.");
//       return;
//     }

//     try {
//       const res = await api.post('/api/ai/generate-questions', {
//         topicsToFocus: topic,
//         numberOfQuestions: 1
//       });

//       const generated = res.data?.questions?.[0]?.question || res.data[0]?.question;
//       setQuestion(generated || "💬 Tell me about a time you optimized an algorithm for performance.");
//       setAnswer('');
//       setFeedback('');
//     } catch (err) {
//       console.error('Failed to fetch question:', err);
//       setQuestion("💬 Tell me about a time you optimized an algorithm for performance.");
//     }
//   };

//   const handleSubmit = async () => {
//     if (!question || !answer) return;

//     setLoading(true);
//     setFeedback('');

//     try {
//       const res = await api.post('/api/ai/generate-feedback', {
//         question,
//         answer
//       });

//       setFeedback(res.data.feedback);
//     } catch (err) {
//       console.error(err);
//       setFeedback("❌ Failed to get feedback.");
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="min-h-screen bg-orange-50">
//       <Navbar />
//       <div className="mt-20 max-w-5xl mx-auto px-4 py-8">
//         <div className="bg-white shadow-md rounded-2xl p-6">
//           <div className="flex justify-between items-center mb-6">
//             <h1 className="text-3xl font-bold text-orange-600">Mock Interview 🎤</h1>
//             <button
//               onClick={handleGenerateQuestion}
//               className="flex items-center gap-2 text-sm bg-yellow-500 text-white px-4 py-2 rounded-lg shadow hover:bg-yellow-600 transition"
//             >
//               <RefreshCcw size={16} />
//               New Question
//             </button>
//           </div>

//           <div className="mb-4">
//             <input
//               value={topic}
//               onChange={(e) => setTopic(e.target.value)}
//               placeholder="Enter topic to focus on (e.g., Graphs, OOP, System Design)"
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
//             />
//           </div>

//           {question ? (
//             <div className="bg-orange-100 p-4 rounded-xl mb-6">
//               <p className="font-medium text-orange-900">{question}</p>
//             </div>
//           ) : (
//             <p className="text-gray-500 mb-4">Enter a topic and click "New Question" to begin.</p>
//           )}

//           {question && (
//             <div className="mb-6">
//               <textarea
//                 value={answer}
//                 onChange={(e) => setAnswer(e.target.value)}
//                 placeholder="Type your answer or use voice input..."
//                 className="w-full h-40 p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 resize-none"
//               />
//               <div className="flex justify-between mt-3">
//                 <button
//                   className="flex items-center gap-2 text-orange-600 hover:text-orange-800 text-sm"
//                   onClick={() => alert("🎙️ Voice input coming soon!")}
//                 >
//                   <Mic size={18} />
//                   Use Voice
//                 </button>

//                 <button
//                   onClick={handleSubmit}
//                   disabled={loading}
//                   className={`flex items-center gap-2 text-sm text-white px-4 py-2 rounded-lg transition ${
//                     loading ? 'bg-gray-400' : 'bg-green-600 hover:bg-green-700'
//                   }`}
//                 >
//                   <Send size={16} />
//                   {loading ? 'Analyzing...' : 'Submit Answer'}
//                 </button>
//               </div>
//             </div>
//           )}

//           {feedback && (
//             <div className="bg-white border-l-4 border-purple-500 shadow p-4 rounded-md">
//               <h3 className="font-semibold text-purple-700 mb-1">AI Feedback</h3>
//               <p className="text-gray-700 whitespace-pre-line">{feedback}</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InterviewPrep;


import React, { useState, useEffect, useRef } from 'react';
import { Mic, RefreshCcw, Send } from 'lucide-react';
import Navbar from '../components/Navbar';
import api from '../services/api'; // if you want to use Gemini backend later

const InterviewPrep = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [feedback, setFeedback] = useState('');
  const [topic, setTopic] = useState('');
  const [loading, setLoading] = useState(false);

  const [recognizing, setRecognizing] = useState(false);
  const recognitionRef = useRef(null);

  // Setup voice recognition
  useEffect(() => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.lang = 'en-US';
      recognitionRef.current.interimResults = false;

      recognitionRef.current.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setAnswer((prev) => prev + ' ' + transcript);
      };

      recognitionRef.current.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
      };

      recognitionRef.current.onend = () => {
        setRecognizing(false);
      };
    } else {
      alert('Speech recognition not supported in this browser.');
    }
  }, []);

  // Generate a mock or actual question (integrate Gemini here)
  const handleGenerateQuestion = async () => {
    if (!topic) {
      alert('Please enter a topic to focus on');
      return;
    }

    // TODO: Replace with Gemini API call
    setQuestion(`💬 Describe a challenging problem related to ${topic}.`);
    setAnswer('');
    setFeedback('');
  };

  // Submit and get mock feedback (replace with real API later)
  const handleSubmit = async () => {
    setLoading(true);
    try {
      // TODO: Replace with Gemini feedback
      setTimeout(() => {
        setFeedback(
          '✅ Good explanation. Include specific metrics and clarify the complexity where needed.'
        );
        setLoading(false);
      }, 1500);
    } catch (err) {
      console.error(err);
      setFeedback('❌ Failed to get feedback.');
      setLoading(false);
    }
  };

  // Voice toggle
  const toggleVoice = () => {
    if (recognizing && recognitionRef.current) {
      recognitionRef.current.stop();
      setRecognizing(false);
    } else if (!recognizing && recognitionRef.current) {
      recognitionRef.current.start();
      setRecognizing(true);
    }
  };

  return (
    <div className="min-h-screen bg-orange-50">
      <Navbar />
      <div className="mt-20 max-w-5xl mx-auto px-4 py-8">
        <div className="bg-white shadow-md rounded-2xl p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-orange-600">Mock Interview 🎤</h1>
            <button
              onClick={handleGenerateQuestion}
              className="flex items-center gap-2 text-sm bg-yellow-500 text-white px-4 py-2 rounded-lg shadow hover:bg-yellow-600 transition"
            >
              <RefreshCcw size={16} />
              New Question
            </button>
          </div>

          {/* Topic input */}
          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="Enter topic to focus on..."
            className="mb-4 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          {question ? (
            <div className="bg-orange-100 p-4 rounded-xl mb-6">
              <p className="font-medium text-orange-900">{question}</p>
            </div>
          ) : (
            <p className="text-gray-500 mb-4">Click "New Question" to begin your mock interview.</p>
          )}

          {question && (
            <div className="mb-6">
              <textarea
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="Type your answer or use voice input..."
                className="w-full h-40 p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 resize-none"
              />
              <div className="flex justify-between mt-3">
                <button
                  onClick={toggleVoice}
                  className="flex items-center gap-2 text-orange-600 hover:text-orange-800 text-sm"
                >
                  <Mic size={18} />
                  {recognizing ? '🛑 Stop Voice' : '🎤 Use Voice'}
                </button>

                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  className={`flex items-center gap-2 text-sm text-white px-4 py-2 rounded-lg transition ${
                    loading ? 'bg-gray-400' : 'bg-green-600 hover:bg-green-700'
                  }`}
                >
                  <Send size={16} />
                  {loading ? 'Analyzing...' : 'Submit Answer'}
                </button>
              </div>
            </div>
          )}

          {feedback && (
            <div className="bg-white border-l-4 border-purple-500 shadow p-4 rounded-md">
              <h3 className="font-semibold text-purple-700 mb-1">AI Feedback</h3>
              <p className="text-gray-700">{feedback}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InterviewPrep;

