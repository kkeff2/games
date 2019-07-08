import React from "react";
import "./gameDecider.css";
import { Link } from "react-router-dom";

export const GameDecider = () => {
  return (
    <div className="GameDecider-container">
      <Link
        to={"/numbers"}
        className={"Link-no-style GameDecider-game"}
        style={{ background: "red" }}
      >
        Numbers
      </Link>
      <Link
        to={"/letters"}
        className="Link-no-style GameDecider-game"
        style={{ background: "blue" }}
      >
        Letters (WIP)
      </Link>
    </div>
  );
};
