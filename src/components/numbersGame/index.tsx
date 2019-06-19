import React, { useState } from "react";
import "./index.css";
import { createNumbersGameNumbers } from "../../core";
import {
  HighNumberSelector,
  HighNumberSelectorProps
} from "./highNumberSelector";

interface SetGameState {
  setGameState: (gameState: GameState) => void;
}

interface InitProps extends HighNumberSelectorProps, SetGameState {}

const Init = ({
  setGameState,
  highNumberSelected,
  onHighNumberSelected
}: InitProps) => {
  return (
    <>
      <HighNumberSelector
        highNumberSelected={highNumberSelected}
        onHighNumberSelected={onHighNumberSelected}
      />
      <button onClick={() => setGameState("start")}>Starta</button>
    </>
  );
};

interface StartProps extends SetGameState {
  gameNumbers: number[];
}

const Start = ({ gameNumbers, setGameState }: StartProps) => {
  console.log(setGameState);
  const gameNumberBoxesElement = () =>
    gameNumbers.map((num, index) => (
      <div key={index} className="NumbersGame-game-number-box">
        {num}
      </div>
    ));
  return (
    <div className="NumbersGame-game-numbers">{gameNumberBoxesElement()}</div>
  );
};

type GameState = "init" | "start" | "ongoing" | "end";

export const NumbersGame = () => {
  const [gameState, setGameState] = useState("init");
  const [highNumber, setHighNumber] = useState<number>(1);

  const getGameContentElement = () => {
    switch (gameState) {
      case "init": {
        return (
          <Init
            highNumberSelected={highNumber}
            onHighNumberSelected={setHighNumber}
            setGameState={setGameState}
          />
        );
      }
      case "start": {
        return (
          <Start
            gameNumbers={createNumbersGameNumbers(highNumber)}
            setGameState={setGameState}
          />
        );
      }
      default: {
        return (
          <Init
            highNumberSelected={highNumber}
            onHighNumberSelected={setHighNumber}
            setGameState={setGameState}
          />
        );
      }
    }
  };
  return (
    <div className="NumbersGame">
      <div className="NumbersGame-header">NUMBERS GAME :D</div>
      {getGameContentElement()}
    </div>
  );
};
