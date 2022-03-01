import React, { useState } from 'react';

export const SearchForm = props => {
  const { onSearch } = props;
  const [searchText, setSearchText] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSearch(searchText)
  }

  return (
    <form
      className="search-form"
      onSubmit={handleSubmit}
    >
      <input
        placeholder="search..."
        onChange={e => setSearchText(e.target.value)}
      />
      <button
        type="submit"
      >
        Search
      </button>
    </form>
  )
}
