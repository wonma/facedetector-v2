import React from 'react';
import './Navigation.css';

const Navigation = ({ route, onRouteChange }) => {
  console.log('Navigation rendered');
  return (
    <nav className='nav'>
      {route === 'home' ? (
        <a
          className='button'
          href='#'
          onClick={() => {
            onRouteChange('login');
          }}
        >
          Log out
        </a>
      ) : (
        <a className='button' href='#'>
          Log in
        </a>
      )}
    </nav>
  );
};

export default Navigation;
