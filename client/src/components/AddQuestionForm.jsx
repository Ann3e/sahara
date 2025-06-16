import React, { useState } from 'react';
import api from '../services/api';

const AddQuestionForm = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    title: '',
    difficulty: 'Easy',
    status: 'Unsolved'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/api/questions', formData);
      onAdd(res.data); // callback to update parent state
      setFormData({ title: '', difficulty: 'Easy', status: 'Unsolved' });
    } catch (err) {
      console.error('Failed to add question', err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 space-y-2">
      <input
        name="title"
        placeholder="Question Title"
        value={formData.title}
        onChange={handleChange}
        className="border p-2 rounded w-full"
      />
      <select name="difficulty" value={formData.difficulty} onChange={handleChange}>
        <option>Easy</option>
        <option>Medium</option>
        <option>Hard</option>
      </select>
      <select name="status" value={formData.status} onChange={handleChange}>
        <option>Unsolved</option>
        <option>Solved</option>
      </select>
      <button className="bg-green-600 text-white px-3 py-1 rounded">Add</button>
    </form>
  );
};

export default AddQuestionForm;
