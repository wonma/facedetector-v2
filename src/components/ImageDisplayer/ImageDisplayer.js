import React from 'react';
import './ImageDisplayer.css';
import ScoreAlarm from '../ScoreAlarm/ScoreAlarm';

const ImageDisplayer = () => {
  return (
    <div className='imageDisplayer'>
      <div className='imageDisplayer__imgbox'>
        <img
          id='img'
          src='https://manofmany.com/wp-content/uploads/2021/01/Yael-Shelbia-2jpg.jpg'
        />
      </div>
      <ScoreAlarm />
    </div>
  );
};

export default ImageDisplayer;
