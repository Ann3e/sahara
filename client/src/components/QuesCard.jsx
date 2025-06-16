// import React, { useState } from 'react';
// import api from '../services/api';

// const QuesCard = ({ onSuccess, onClose }) => {
//   const [form, setForm] = useState({
//     title: '',
//     topic: '',
//     quesLink: '',
//     status: '',
//     notes: '',
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await api.post('/api/dsa/questions', form);
//       if (onSuccess) onSuccess(res.data.data);
//       onClose();
//     } catch (error) {
//       console.error('Error adding question:', error);
//     }
//   };

//   return (
//     <div className="bg-white border border-gray-200 shadow-lg rounded-2xl p-6 w-full max-w-xl mx-auto mb-6">
//       <h3 className="text-xl font-semibold mb-4 text-blue-700">➕ Add New Question</h3>
      
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label className="block text-sm font-medium mb-1">Title</label>
//           <input 
//             name="title"
//             value={form.title}
//             onChange={handleChange}
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="Enter question title"
//             required
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium mb-1">Topic</label>
//           <input 
//             name="topic"
//             value={form.topic}
//             onChange={handleChange}
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="e.g. Arrays, Trees"
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium mb-1">Question Link</label>
//           <input 
//             name="quesLink"
//             value={form.quesLink}
//             onChange={handleChange}
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="https://..."
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium mb-1">Status</label>
//           <select 
//             name="status"
//             value={form.status}
//             onChange={handleChange}
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             <option value="">Select status</option>
//             <option value="Not Started">Not Started</option>
//             <option value="In Progress">In Progress</option>
//             <option value="Solved">Solved</option>
//           </select>
//         </div>

//         <div>
//           <label className="block text-sm font-medium mb-1">Notes</label>
//           <textarea 
//             name="notes"
//             value={form.notes}
//             onChange={handleChange}
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="Any additional notes..."
//             rows={3}
//           />
//         </div>

//         <div className="flex justify-end space-x-3 mt-4">
//           <button
//             type="button"
//             onClick={onClose}
//             className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200"
//           >
//             Cancel
//           </button>
//           <button
//             type="submit"
//             className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500"
//           >
//             Add Question
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default QuesCard;
import React, { useState } from 'react';
import api from '../services/api';

const QuesCard = ({ onSuccess, onClose }) => {
  const [form, setForm] = useState({
    title: '',
    topic: '',
    quesLink: '',
    status: '',
    notes: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/api/dsa/questions', form);
      if (onSuccess) onSuccess(res.data.data);
      onClose();
    } catch (error) {
      console.error('Error adding question:', error);
    }
  };

  return (
    <div className="bg-white border border-orange-200 shadow-xl rounded-2xl p-6 w-full max-w-xl mx-auto">
      <h3 className="text-2xl font-bold text-orange-600 mb-4">➕ Add New Question</h3>

      <form onSubmit={handleSubmit} className="space-y-4 text-sm text-gray-800">
        {/* Title */}
        <div>
          <label className="block font-medium mb-1 text-gray-700">Title</label>
          <input 
            name="title"
            value={form.title}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter question title"
            required
          />
        </div>

        {/* Topic */}
        <div>
          <label className="block font-medium mb-1 text-gray-700">Topic</label>
          <input 
            name="topic"
            value={form.topic}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            placeholder="e.g. Arrays, Trees"
          />
        </div>

        {/* Link */}
        <div>
          <label className="block font-medium mb-1 text-gray-700">Question Link</label>
          <input 
            name="quesLink"
            value={form.quesLink}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            placeholder="https://..."
          />
        </div>

        {/* Status */}
        <div>
          <label className="block font-medium mb-1 text-gray-700">Status</label>
          <select 
            name="status"
            value={form.status}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          >
            <option value="">Select status</option>
            <option value="Not Started">Not Started</option>
            <option value="In Progress">In Progress</option>
            <option value="Solved">Solved</option>
          </select>
        </div>

        {/* Notes */}
        <div>
          <label className="block font-medium mb-1 text-gray-700">Notes</label>
          <textarea 
            name="notes"
            value={form.notes}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="Any additional notes..."
            rows={3}
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-end space-x-3 pt-4">
          <button
            type="button"
            onClick={onClose}
            className="bg-gray-100 text-gray-600 px-4 py-2 rounded-lg hover:bg-gray-200 transition"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition"
          >
            Add Question
          </button>
        </div>
      </form>
    </div>
  );
};

export default QuesCard;
