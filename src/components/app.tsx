import React, { useState } from "react";
import "./app.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
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
    <BrowserRouter>
      <div className="App">
        <div className="App-header" onClick={() => setGame(null)}>
          WELCOME
        </div>
        <div className="App-content">
          <Switch>
            <Route
              exact
              path="/"
              component={}
            />
            <Route path="/auth/kivra/return" component={CustomRedirect} />
            <PrivateRoute
              path="/:agreementKey/"
              component={AgreementPageContainer}
            />
          </Switch>
          {getContentElement()}
        </div>
      </div>
    </BrowserRouter>
  );
};
