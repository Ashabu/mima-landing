import React from 'react';
import './App.scss';
import AppHeader from './Components/AppHeader';

const App = () => {
  return (
    <div className="App">
      <AppHeader />
      <div className='con-1'>
        <div className='content'>
          <h1>The official Mima Affiliate program</h1>
          <p>And 100 Free spins + Secret Daily Bonuses</p>
          <a href=''>Join now</a>
        </div>
      </div>
    </div>
  );
}

export default App;
