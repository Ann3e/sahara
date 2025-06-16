import React from 'react';

const FilterBar = ({ filters, onChange }) => {
  return (
    <div className="flex gap-4 mb-4">
      <select name="difficulty" value={filters.difficulty} onChange={onChange}>
        <option value="">All Difficulties</option>
        <option value="Easy">Easy</option>
        <option value="Medium">Medium</option>
        <option value="Hard">Hard</option>
      </select>

      <select name="status" value={filters.status} onChange={onChange}>
        <option value="">All Statuses</option>
        <option value="Solved">Solved</option>
        <option value="Unsolved">Unsolved</option>
      </select>
    </div>
  );
};

export default FilterBar;
