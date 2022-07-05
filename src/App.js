// import logo from './logo.svg';
import './App.css';
import Logo from './components/Logo';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className='App'>
      <header className='App__header'>
        <Logo />
        <Navigation />
      </header>
    </div>
  );
}

export default App;
