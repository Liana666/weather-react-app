import React from 'react';

import './App.sass';
import MainContainer from './components/MainContainer';

const App = () => {

  return (
    <div className="App">
      <header className="App-header">
        <div className="logo">WeatherToday</div>
      </header>
      <MainContainer />
    </div>
  );
}

export default App;
