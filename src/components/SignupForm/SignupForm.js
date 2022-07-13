import React from 'react';
import './SignupForm.css';

const SignupForm = ({ onRouteChange }) => {
  return (
    <div className='form__wrapper'>
      <h1 className='form__title'>Sign up</h1>
      <div>
        <div className='form__field'>
          <label className='form__label'>First Name</label>
          <input className='form__input' type='text' />
        </div>
        <div className='form__field'>
          <label className='form__label'>Last Name</label>
          <input className='form__input' type='text' />
        </div>
        <div className='form__field'>
          <label className='form__label'>Email</label>
          <input className='form__input' type='email' />
        </div>
        <div className='form__field'>
          <label className='form__label'>Password</label>
          <input className='form__input' type='password' />
        </div>
        <div className='form__field'>
          <label className='form__label'>Password Confirmation</label>
          <input className='form__input' type='password' />
        </div>
        <button>Sign up</button>
        <small>
          Already have an account?
          <span
            className='textlink'
            onClick={() => {
              onRouteChange('login');
            }}
          >
            Log in
          </span>
        </small>
      </div>
    </div>
  );
};

export default SignupForm;
