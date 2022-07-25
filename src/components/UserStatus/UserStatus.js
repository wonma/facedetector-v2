import React from 'react';
import './UserStatus.css';

const UserStatus = ({ totalScore, totalCredit, firstName }) => {
  return (
    <div className='userStatus'>
      <h2 className='userStatus__title'>Howdy, {firstName}!</h2>
      <div className='userStatus__card'>
        <p className='metric'>
          Score:<span className='metric__number-big'>{totalScore}</span>
        </p>
        <span className='hr-line'></span>
        <p className='metric'>
          Credits: <span className='metric__number'>{totalCredit}</span>
        </p>
        {/* <p className='metric'>
          Total attempts:{' '}
          <span className='metric__number'>{totalAttempts}</span>
  </p> */}
      </div>
    </div>
  );
};

export default UserStatus;
