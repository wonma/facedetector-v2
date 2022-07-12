import React from 'react';
import './DetectorAI.css';
import SearchBar from '../SearchBar/SearchBar';
import ImageDisplayer from '../ImageDisplayer/ImageDisplayer';

const DetectorAI = ({
  onInputChange,
  inputValue,
  boxes,
  imgUrl,
  onClick,
  onEnter
}) => {
  console.log('DetectorAI rendered');
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
        <ImageDisplayer boxes={boxes} imgUrl={imgUrl} />
      </div>
    </div>
  );
};

export default DetectorAI;
