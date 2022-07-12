import React from 'react';
import './DetectorAI.css';
import SearchBar from '../SearchBar/SearchBar';
import ImageDisplayer from '../ImageDisplayer/ImageDisplayer';

const DetectorAI = ({
  onInputChange,
  inputValue,
  boxes,
  boxScore,
  imgUrl,
  onClick,
  onEnter
}) => {
  console.log(boxes);
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
        <ImageDisplayer boxes={boxes} imgUrl={imgUrl} boxScore={boxScore} />
      </div>
    </div>
  );
};

export default DetectorAI;
