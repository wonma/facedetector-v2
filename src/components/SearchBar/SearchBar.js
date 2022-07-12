import React from 'react';
import './SearchBar.css';

const SearchBar = ({ onInputChange, inputValue, onEnter, onClick }) => {
  console.log('Search Bar rendered');
  return (
    <div className='searchBar'>
      <input
        className='searchBar__input'
        type='text'
        placeholder='Paste the image url here'
        onChange={onInputChange}
        onKeyDown={onEnter}
        value={inputValue}
      />
      <button className='button--shrink' onClick={onClick}>
        Find Faces
      </button>
    </div>
  );
};

export default SearchBar;
