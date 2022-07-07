// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Logo from './components/Logo/Logo';
import Navigation from './components/Navigation/Navigation';
import LoginForm from './components/LoginForm/LoginForm';

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
        <div className='App__main-wrapper container'>
          <LoginForm />
        </div>
      </section>
    </div>
  );
}

export default App;
