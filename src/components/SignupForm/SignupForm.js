import React, { Component } from 'react';
import './SignupForm.css';

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    };
  }
  onFirstNameChange = e => {
    this.setState({ firstName: e.target.value });
  };

  onLastNameChange = e => {
    this.setState({ lastName: e.target.value });
  };

  onEmailChange = e => {
    this.setState({ email: e.target.value });
  };

  onPasswordChange = e => {
    this.setState({ password: e.target.value });
  };

  onSignupSubmit = e => {
    e.preventDefault();
    fetch('http://localhost:5000/register', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.state)
    })
      .then(response => response.json())
      .then(data => {
        if (data.result === 'success') {
          console.log(data.user);
          this.props.onRouteChange('home');
        } else {
          console.log('error: ', data);
        }
      });
  };

  render() {
    return (
      <div className='form__wrapper'>
        <h1 className='form__title'>Sign up</h1>
        <form onSubmit={this.onSignupSubmit}>
          <div className='form__field'>
            <label className='form__label'>First Name</label>
            <input
              onChange={this.onFirstNameChange}
              className='form__input'
              name='firstName'
              type='text'
            />
          </div>
          <div className='form__field'>
            <label className='form__label'>Last Name</label>
            <input
              onChange={this.onLastNameChange}
              className='form__input'
              type='text'
            />
          </div>
          <div className='form__field'>
            <label className='form__label'>Email</label>
            <input
              onChange={this.onEmailChange}
              className='form__input'
              type='email'
            />
          </div>
          <div className='form__field'>
            <label className='form__label'>Password</label>
            <input
              onChange={this.onPasswordChange}
              className='form__input'
              type='password'
            />
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
                this.props.onRouteChange('login');
              }}
            >
              Log in
            </span>
          </small>
        </form>
      </div>
    );
  }
}

export default SignupForm;
