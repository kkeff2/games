import React from "react";
import "./init.css";
import { GameState } from "./index";

interface HighNumberOption {
  label: string;
  value: number;
}

interface InitProps {
  highNumberSelected: number;
  onHighNumberSelected: (value: number) => void;
  setGameState: (gameState: GameState) => void;
}

export const Init = ({
  setGameState,
  highNumberSelected,
  onHighNumberSelected
}: InitProps) => {
  const highNumbersOptions: HighNumberOption[] = [
    { label: "1", value: 1 },
    { label: "2", value: 2 },
    { label: "3", value: 3 }
  ];
  const highNumbersOptionsElement = highNumbersOptions.map(
    ({ label, value }: HighNumberOption) => {
      return (
        <div key={value}>
          <label>{label}</label>
          <input
            checked={value === highNumberSelected}
            type="radio"
            onChange={() => onHighNumberSelected(value)}
          />
        </div>
      );
    }
  );
  return (
    <>
      <div className="Init-high-number-selector">
        {highNumbersOptionsElement}
      </div>
      <button onClick={() => setGameState("start")}>Starta</button>
    </>
  );
};
