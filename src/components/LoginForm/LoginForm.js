import React, { Component } from 'react';
import './LoginForm.css';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  onEmailInputChange = e => {
    this.setState({ email: e.target.value });
  };

  onPasswordInputChange = e => {
    this.setState({ password: e.target.value });
  };

  getSigninResult = () => {
    fetch('http://localhost:5000/signin', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    })
      .then(response => response.json())
      .then(data => {
        if (data === 'success') {
          this.props.onRouteChange('home');
        } else {
          console.log('error: ', data);
        }
      });
  };

  render() {
    const { onRouteChange } = this.props;
    return (
      <div className='form__wrapper'>
        <h1 className='form__title'>Log in</h1>
        <div>
          <div className='form__field'>
            <label className='form__label'>Email</label>
            <input
              onChange={this.onEmailInputChange}
              className='form__input'
              type='email'
            />
          </div>
          <div className='form__field'>
            <label className='form__label'>Password</label>
            <input
              onChange={this.onPasswordInputChange}
              className='form__input'
              type='password'
            />
          </div>
          <button
            onClick={() => {
              this.getSigninResult();
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
  }
}

export default LoginForm;
