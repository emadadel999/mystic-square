import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Welcome from "./pages/Welcome";
import Game from "./pages/Game";
import Footer from "./components/Footer";

function App() {
  return (
    <div className='app-container'>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Welcome />
          </Route>
          <Route exact path='/game/:type'>
            <Game />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
