import React, { Component } from 'react';
import './ScoreAlarm.css';

const ScoreAlarm = props => {
  return (
    <div
      id='scoreAlarm'
      className={`scoreAlarm animate slide-up ${props.boxScore.active}`}
    >
      + {props.boxScore.score}
    </div>
  );
};

export default ScoreAlarm;
