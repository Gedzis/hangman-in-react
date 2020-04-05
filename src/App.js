import React from 'react';
import './App.scss';
import Header from './components/Header/Header'
import GameBoard from './components/GameBoard/GameBoard'

function App() {
  return (
    <div className="App">
      <Header/>
      <GameBoard/>
    </div>
  );
}

export default App;
