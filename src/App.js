// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Clarifai from 'clarifai';
import Logo from './components/Logo/Logo';
import Navigation from './components/Navigation/Navigation';
import DetectorAI from './components/DetectorAI/DetectorAI';
import UserStatus from './components/UserStatus/UserStatus';
import LoginForm from './components/LoginForm/LoginForm';
import SignupForm from './components/SignupForm/SignupForm';
import { IgnoreCaseMode } from 'css-what';

const app = new Clarifai.App({
  apiKey: '8fe29b65310442f9bdc4b050f1c35398'
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      isLoggedin: false
    };
  }

  onInputChange = e => {
    this.setState({ input: e.target.value });
  };

  // createBoundingBox = ({ top_row, right_col, bottom_row, left_col }) => {
  //   console.log(top_row);
  //   return (
  //     <div
  //       className='imageDisplayer__boundingbox'
  //       style={`inset: ${top_row * 100}% ${right_col * 100}% ${bottom_row *
  //         100}% ${left_col * 100}%`}
  //     ></div>
  //   );
  // };

  onEnter = e => {
    if (e.keyCode == 13) {
      this.setState({ input: '' });
      app.models
        .predict(
          'a403429f2ddf4b49b307e318f00e528b',
          'https://manofmany.com/wp-content/uploads/2021/01/Yael-Shelbia-2jpg.jpg'
        )
        .then(response => {
          console.log(
            response.outputs[0].data.regions[0].region_info.bounding_box
          );
        });
    }
    //  console.log(Clarifai);
  };

  onClick = () => {
    console.log(this.state.input);
  };

  render() {
    return (
      <div className='App'>
        <header className='App__header'>
          <div className='App__header-wrapper container'>
            <Logo />
            <Navigation />
          </div>
        </header>
        <section className='App__main'>
          <div className='container container-content flex'>
            <UserStatus />
            <DetectorAI
              onInputChange={this.onInputChange}
              onClick={this.onClick}
              onEnter={this.onEnter}
              inputValue={this.state.input}
            />
            {/*  
            <LoginForm />
            <SignupForm />
        */}
          </div>
        </section>
      </div>
    );
  }
}

export default App;
