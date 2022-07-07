// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Logo from './components/Logo/Logo';
import Navigation from './components/Navigation/Navigation';

function App() {
  return (
    <div className='App'>
      <header className='App__header'>
        <div className='App__header-wrapper'>
          <Logo />
          <Navigation />
        </div>
      </header>
    </div>
  );
}

export default App;
