import React, { useState } from "react";
import "./index.css";
import { createNumbersGameNumbers } from "../../core";
import { Init } from "./init";
import { Start } from "./start";

export type GameState = "init" | "start" | "ongoing" | "end";

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
      <div className="NumbersGame-header">NUMBERS GAME</div>
      {getGameContentElement()}
    </div>
  );
};
