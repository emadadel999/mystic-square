import React from "react";

import Welcome from "./pages/Welcome";
import Game from "./pages/Game";
import Result from "./pages/Result";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Helmet } from "react-helmet";
import './App.css';

function App() {
  return (
    <div className="App">
      <Helmet 
        bodyAttributes={{style: 'background-color : black; min-height: 100%;'}} 
        htmlAttributes={{style: 'height: 100%;'}} />
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/welcome" />} />
          <Route exact path="/welcome">
            <Welcome />
          </Route>
          <Route exact path="/game/:type">
            <Game />
          </Route>
          <Route exact path="/result">
            <Result />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
