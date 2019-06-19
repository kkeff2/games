import React from "react";
import "./gameDecider.css";

interface Props {
  onGameClick: (game: string) => void;
}

export const GameDecider = ({ onGameClick }: Props) => {
  return (
    <div className="GameDecider-container">
      <div
        className="GameDecider-game"
        onClick={() => onGameClick("numbers")}
        style={{ background: "red" }}
      >
        Numbers
      </div>
      <div
        className="GameDecider-game"
        onClick={() => onGameClick("letters")}
        style={{ background: "blue" }}
      >
        Letters (WIP)
      </div>
    </div>
  );
};
