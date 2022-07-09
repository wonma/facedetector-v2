// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Logo from './components/Logo/Logo';
import Navigation from './components/Navigation/Navigation';
import DetectorAI from './components/DetectorAI/DetectorAI';
import UserStatus from './components/UserStatus/UserStatus';
import LoginForm from './components/LoginForm/LoginForm';
import SignupForm from './components/SignupForm/SignupForm';

function App() {
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
          <DetectorAI />
          {/*  
            <LoginForm />
            <SignupForm />
        */}
        </div>
      </section>
    </div>
  );
}

export default App;
