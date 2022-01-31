import React from 'react';
import girl from './img/girl.png'

import './App.sass';
import MainContainer from './components/Main/MainContainer';

const App = () => {

  return (
    <div className="App">
      <img className="App__img" src={girl} alt="" />
      <header className="App__header">
        <div className="App__header__logo">WeatherToday</div>
      </header>
      <MainContainer />
    </div>
  );
}

export default App;
