import React, {useState} from 'react';
import './App.css';
import {GameDecider} from "./GameDecider";
import {NumbersGame} from "./NumbersGame";

const App = () => {
  const [game, setGame] = useState(null);
  const getContentElement = () => {
    if (!game){
      return  <GameDecider test="HEJ" onGameClick={setGame}/>;
    }
    return game === 'numbers' ? <NumbersGame onGameClick={setGame}/> : <div>LETTERS WIP</div>;
  }
  return (
    <div className="App">
      <div className="App-header" onClick={() => setGame(null)}>WELCOME</div>
      <div className="App-content">
        {getContentElement()}
      </div>
    </div>
  );
}

export default App;
