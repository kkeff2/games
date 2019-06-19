import React, { useState } from "react";
import "./app.css";
import { GameDecider } from "./gameDecider";
import { NumbersGame } from "./numbersGame";

export const App = () => {
  const [game, setGame] = useState<string | null>(null);
  const getContentElement = () => {
    if (!game) {
      return <GameDecider onGameClick={setGame} />;
    }
    return game === "numbers" ? <NumbersGame /> : <div>LETTERS WIP</div>;
  };
  return (
    <div className="App">
      <div className="App-header" onClick={() => setGame(null)}>
        WELCOME
      </div>
      <div className="App-content">{getContentElement()}</div>
    </div>
  );
};
