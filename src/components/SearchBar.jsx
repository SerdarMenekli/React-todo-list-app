import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
      <input
        type="text"
        className='form-control mb-3'
        value={query}
        onChange={handleChange}
        placeholder="Search tasks"
      />
  );
};

export default SearchBar;
