import React from 'react';
import './ScoreAlarm.css';

const ScoreAlarm = ({ boxScore }) => {
  if (boxScore.active === true) {
    return (
      <div className='scoreAlarm animate slide-up'>+ {boxScore.score}</div>
    );
  }
};

export default ScoreAlarm;
