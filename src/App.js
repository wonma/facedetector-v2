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
      user: {
        id: '',
        email: '',
        firstName: '',
        totalScore: 0,
        totalCredit: 0
      },
      route: 'login',
      boxScore: {
        active: '',
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

  loadUser = data => {
    console.log(data);
    this.setState({
      user: {
        id: data.id,
        email: data.email,
        firstName: data.firstName,
        totalScore: data.totalScore,
        totalCredit: data.totalCredit
      }
    });
  };

  getImageResult = () => {
    this.setState({
      boxes: [],
      imgUrl: this.state.input,
      boxScore: { active: '' }
    });
    const { totalScore, totalCredit } = this.state.user;

    ///////////////////////////////////////////////////////////////////////////////////////////////////
    // In this section, we set the user authentication, user and app ID, model details, and the URL
    // of the image we want as an input. Change these strings to run your own example.
    //////////////////////////////////////////////////////////////////////////////////////////////////

    // Your PAT (Personal Access Token) can be found in the portal under Authentification
    const PAT = 'd00fe3e62c4e4c97b0383c75ab3bcf32';
    const USER_ID = 'clarifai';
    const APP_ID = 'main';
    const MODEL_ID = 'face-detection';
    const MODEL_VERSION_ID = '6dc7e46bc9124c5c8824be4822abe105';
    const IMAGE_URL = this.state.input;

    ///////////////////////////////////////////////////////////////////////////////////
    // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
    ///////////////////////////////////////////////////////////////////////////////////

    const raw = JSON.stringify({
        "user_app_id": {
            "user_id": USER_ID,
            "app_id": APP_ID
        },
        "inputs": [
            {
                "data": {
                    "image": {
                        "url": IMAGE_URL
                        // "base64": IMAGE_BYTES_STRING
                    }
                }
            }
        ]
    });

    const requestOptions = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Key ' + PAT
        },
        body: raw
    };
 
   // Step1. Make API call to Clarifai server.
   // - Step1-1. User fetch to send this.state.input(the url of the image).

   fetch("https://api.clarifai.com/v2/models/" + MODEL_ID + "/versions/" + MODEL_VERSION_ID + "/outputs", requestOptions)
   .then(response => response.json())
   .then(result => {
        // Step1-2. Receive the response, render the box regions, and update the box score. 
       const regions = result.outputs[0].data.regions;
       this.updateBoxState(this.calculateBox(regions));
       this.setState({
         boxScore: {
           active: 'active',
           score: regions.length * 10
         }
       });
       
               // Step 2. Update Total Score and Total Credit.
               fetch('http://localhost:5000/image', {
                method: 'put',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  id: this.state.user.id,
                  totalScore: totalScore + regions.length * 10
                })
              })
              .then(response => response.json())
              .then(({ totalScore, totalCredit }) => {
                this.setState({
                  user: Object.assign(this.state.user, {
                    totalScore: totalScore,
                    totalCredit: totalCredit
                  })
                });
                setTimeout(() => {
                  document.querySelector('.scoreAlarm').classList.remove('active');
                }, 1000);
              })
              .catch(err => console.log(err));
              // This is the end of 'Step 2'.
   })
   .catch(error => console.log('error', error));

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
                totalScore={this.state.user.totalScore}
                totalCredit={this.state.user.totalCredit}
                firstName={this.state.user.firstName}
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
                <LoginForm
                  onRouteChange={this.onRouteChange}
                  loadUser={this.loadUser}
                />
              ) : (
                <SignupForm
                  onRouteChange={this.onRouteChange}
                  loadUser={this.loadUser}
                />
              )}
            </div>
          )}
        </section>
      </div>
    );
  }
}

export default App;
