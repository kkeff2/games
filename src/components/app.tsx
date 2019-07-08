import React from "react";
import "./app.css";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import { GameDecider } from "./gameDecider";
import { NumbersGame } from "./numbersGame";

export const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="App-header">
          <Link className="Link-no-style " to={"/"}>
            WELCOME
          </Link>
        </div>
        <div className="App-content">
          <Switch>
            <Route exact path="/" component={GameDecider} />
            <Route exact path="/numbers" component={NumbersGame} />
            <Route exact path="/letters" component={GameDecider} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};
