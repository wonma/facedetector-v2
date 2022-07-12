import React, { useState, useEffect } from 'react';
import './ImageDisplayer.css';
import ScoreAlarm from '../ScoreAlarm/ScoreAlarm';

const ImageDisplayer = ({ boxes, imgUrl, boxScore }) => {
  const divBoxes = boxes.map(box => {
    const { top, right, bottom, left } = box;
    return (
      <div
        key={top}
        className='imageDisplayer__boundingbox animate zoom-in'
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
      <ScoreAlarm boxScore={boxScore} />
    </div>
  );
};

export default ImageDisplayer;
