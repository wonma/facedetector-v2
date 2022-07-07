import React from 'react';
import './LoginForm.css';

const LoginForm = () => {
  return (
    <div className='form__wrapper'>
      <h1 className='form__title'>Log in</h1>
      <form>
        <div className='form__field'>
          <label className='form__label'>Email</label>
          <input className='form__input' type='email' />
        </div>
        <div className='form__field'>
          <label className='form__label'>Password</label>
          <input className='form__input' type='password' />
        </div>
        <button>Log in</button>
      </form>
    </div>
  );
};

export default LoginForm;
