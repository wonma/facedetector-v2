import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className='searchBar'>
      <input
        className='searchBar__input'
        type='text'
        placeholder='Paste the image url here'
      ></input>
      <button className='button--shrink'>Find Faces</button>
    </div>
  );
};

export default SearchBar;
