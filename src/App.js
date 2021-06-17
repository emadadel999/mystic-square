import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";

import Welcome from "./pages/Welcome";
import Game from "./pages/Game";
import Footer from "./components/Footer";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <AppContainer>
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
      <Footer />
    </AppContainer>
  );
}

export default App;
