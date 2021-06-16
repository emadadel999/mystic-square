import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Welcome from "./pages/Welcome";
import Game from "./pages/Game";
import GithubIcon from "./components/Icons/GithubIcon";
import LinkedInIcon from "./components/Icons/LinkedInIcon";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Welcome />
          </Route>
          <Route exact path="/game/:type">
            <Game />
          </Route>
        </Switch>
      </Router>
      <footer>
        <hr className="footerLine" />
        <p className="creditsText">
          created by Emad Adel
          <br />
          it's open source,{" "}
          <a
            className="visitRepoLink"
            href="https://github.com/emadadel999/mystic-square"
            target="_blank"
            rel="noopener noreferrer"
          >
            <b>visit the repo</b>
          </a>
        </p>
        <div className="socialLinks">
          <a
            href="https://github.com/emadadel999"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon
              svgWidth="30"
              svgHeight="30"
              fill="#081d45"
              fillOpacity="0.75"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/emad-adel-abusaif"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon
              svgWidth="30"
              svgHeight="30"
              fill="#081d45"
              fillOpacity="0.75"
            />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
