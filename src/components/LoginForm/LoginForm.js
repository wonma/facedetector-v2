import React from 'react';
import './LoginForm.css';

const LoginForm = ({ onRouteChange }) => {
  return (
    <div className='form__wrapper'>
      <h1 className='form__title'>Log in</h1>
      <div>
        <div className='form__field'>
          <label className='form__label'>Email</label>
          <input className='form__input' type='email' />
        </div>
        <div className='form__field'>
          <label className='form__label'>Password</label>
          <input className='form__input' type='password' />
        </div>
        <button
          onClick={() => {
            onRouteChange('home');
          }}
        >
          Log in
        </button>
        <small>
          Don't have an account yet?
          <span
            className='textlink'
            onClick={() => {
              onRouteChange('signup');
            }}
          >
            Sign up
          </span>
        </small>
      </div>
    </div>
  );
};

export default LoginForm;
