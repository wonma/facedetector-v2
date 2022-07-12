import React, { useState, useEffect } from 'react';
import './ImageDisplayer.css';
import ScoreAlarm from '../ScoreAlarm/ScoreAlarm';

const ImageDisplayer = ({ boxes, imgUrl }) => {
  const divBoxes = boxes.map(box => {
    const { top, right, bottom, left } = box;
    return (
      <div
        className='imageDisplayer__boundingbox'
        style={{
          inset: `${top}% ${right}% ${bottom}% ${left}%`
        }}
      ></div>
    );
  });

  return (
    <div className='imageDisplayer'>
      <div className='imageDisplayer__imgbox'>
        <img id='img' src={imgUrl} />
        {divBoxes}
      </div>
      <ScoreAlarm />
    </div>
  );
};

export default ImageDisplayer;
