import React from "react";

import Welcome from "./pages/Welcome";
import Game from "./pages/Game";
import Result from "./pages/Result";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useHistory,
} from "react-router-dom";
import { Helmet } from "react-helmet";
import './App.css';
import { Alert } from "reactstrap";

function App() {
  let history = useHistory();
  const solvingHandler = () => {
    history.push('/result');
  };

  return (
    <div className="App">
      <Helmet 
        bodyAttributes={{style: 'background-color : black; min-height: 100%;'}} 
        htmlAttributes={{style: 'height: 100%;'}} />
      <Router>
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
