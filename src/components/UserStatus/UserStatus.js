import React from 'react';
import './UserStatus.css';

const UserStatus = () => {
  return (
    <div className='userStatus'>
      <h2 className='userStatus__title'>Howdy, Wonmi!</h2>
      <div className='userStatus__card'>
        <p className='metric'>
          Score:<span className='metric__number-big'>60</span>
        </p>
        <span className='hr-line'></span>
        <p className='metric'>
          Credits: <span className='metric__number'>100</span>
        </p>
        <p className='metric'>
          Total attempts: <span className='metric__number'>1</span>
        </p>
      </div>
    </div>
  );
};

export default UserStatus;
