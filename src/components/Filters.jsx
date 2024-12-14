import React, { useState } from 'react';

const Filters = ({ categories, onSelectCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    onSelectCategory(category);
  };

  return (
    <select className="form-select mb-3" value={selectedCategory} onChange={handleCategoryChange}>
      <option value="">Select Category</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default Filters;
