import React from 'react';
import './Navigation.css';

const Navigation = () => {
  console.log('Navigation rendered');
  return (
    <nav className='nav'>
      {/* <a className='button' href='#'>
        Log in
      </a> */}
      <a className='button' href='#'>
        Log out
      </a>
    </nav>
  );
};

export default Navigation;
