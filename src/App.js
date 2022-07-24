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
      boxes: [],
      imgUrl: '',
      userState: {
        totalScore: 0,
        credits: 300,
        totalAttempts: 0
      },
      route: 'login',
      boxScore: {
        active: false,
        score: null
      }
    };
  }

  updateBoxState = boxInsetArray => {
    this.setState({ boxes: boxInsetArray });
  };

  calculateBox = boxes => {
    return boxes.map(box => {
      const {
        top_row,
        right_col,
        bottom_row,
        left_col
      } = box.region_info.bounding_box;
      return {
        top: top_row * 100,
        bottom: 100 - bottom_row * 100,
        left: left_col * 100,
        right: 100 - right_col * 100
      };
    });
  };

  onInputChange = e => {
    this.setState({ input: e.target.value });
  };

  getImageResult = () => {
    this.setState({
      boxes: [],
      imgUrl: this.state.input,
      boxScore: { active: false }
    });

    const { totalAttempts, totalScore, credits } = this.state.userState;
    app.models
      .predict('a403429f2ddf4b49b307e318f00e528b', this.state.input)
      .then(response => {
        const dataArray = response.outputs[0].data.regions;
        this.updateBoxState(this.calculateBox(dataArray));
        this.setState({
          boxScore: {
            active: true,
            score: dataArray.length * 10
          }
        });
        this.setState({
          userState: {
            totalAttempts: totalAttempts + 1,
            totalScore: totalScore + dataArray.length * 10,
            credits: credits - 10
          }
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  onEnter = e => {
    if (e.keyCode == 13) {
      this.getImageResult();
    }
  };

  onClick = () => {
    this.getImageResult();
  };

  onRouteChange = routeName => {
    this.setState({ route: routeName });
  };

  render() {
    console.log('App rendered');
    return (
      <div className='App'>
        <header className='App__header'>
          <div className='App__header-wrapper container'>
            <Logo />
            <Navigation
              route={this.state.route}
              onRouteChange={this.onRouteChange}
            />
          </div>
        </header>
        <section className='App__main'>
          {this.state.route === 'home' ? (
            <div className='container container-content flex'>
              <UserStatus
                totalScore={this.state.userState.totalScore}
                credits={this.state.userState.credits}
                totalAttempts={this.state.userState.totalAttempts}
              />
              <DetectorAI
                onInputChange={this.onInputChange}
                onClick={this.onClick}
                onEnter={this.onEnter}
                inputValue={this.state.input}
                boxes={this.state.boxes}
                imgUrl={this.state.imgUrl}
                boxScore={this.state.boxScore}
              />
            </div>
          ) : (
            <div className='container container-content'>
              {this.state.route === 'login' ? (
                <LoginForm onRouteChange={this.onRouteChange} />
              ) : (
                <SignupForm onRouteChange={this.onRouteChange} />
              )}
            </div>
          )}
        </section>
      </div>
    );
  }
}

export default App;
