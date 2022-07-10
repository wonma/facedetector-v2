import React from 'react';
import './DetectorAI.css';
import SearchBar from '../SearchBar/SearchBar';
import ImageDisplayer from '../ImageDisplayer/ImageDisplayer';

const DetectorAI = ({ onInputChange, inputValue, onClick, onEnter }) => {
  return (
    <div className='detectorAI'>
      <h1 className='detectorAI__title'>Your Detector AI</h1>
      <div className='detectorAI__card'>
        <p className='detectorAI__heading'>
          Help me find as many faces as possible!
        </p>
        <span className='detectorAI__rule-info'>1 face = 10 scores</span>
        <SearchBar
          onInputChange={onInputChange}
          onClick={onClick}
          onEnter={onEnter}
          inputValue={inputValue}
        />
        <ImageDisplayer />
      </div>
    </div>
  );
};

export default DetectorAI;
