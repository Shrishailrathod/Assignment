import React from 'react';

const SortOptions = ({ onSort }) => (
  <div className="mb-3">
    <button className="btn btn-outline-primary me-2" onClick={() => onSort('name')}>
      Sort by Name
    </button>
    <button className="btn btn-outline-primary" onClick={() => onSort('nutrition')}>
      Sort by Nutrition Grade
    </button>
  </div>
);

export default SortOptions;
