import React from "react";

import Welcome from "./pages/Welcome";
import Game from "./pages/Game";
import Result from "./pages/Result";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./App.css";
import GithubIcon from "./components/GithubIcon";
import LinkedInIcon from "./components/LinkedInIcon";

function App() {
  return (
    <div className="App">
      <Helmet
        bodyAttributes={{
          style: "background-color : cornflowerblue; min-height: 100%;",
        }}
        htmlAttributes={{ style: "height: 100%;" }}
      />
      <Router>
        <Switch>
          <Route exact path="/">
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
      <footer>
        <hr className="footerLine" />
        <p className="creditsText">
          created by Emad Adel
          <br />
          it's open source,{" "}
          <a
            className="hyperLink"
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
            <GithubIcon svgWidth="30" svgHeight="30" fill="#081d45" fillOpacity="0.75"/>
          </a>
          <a
            href="https://www.linkedin.com/in/emad-adel-abusaif"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon svgWidth="30" svgHeight="30" fill="#081d45" fillOpacity="0.75"/>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
