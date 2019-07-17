import React from "react";
import "./App.scss";
import { Route, Switch } from "react-router-dom";
import CircusNav from "./components/CircusNav";
import Homepage from "./components/Homepage";
import Activities from "./components/Activities";
import Favorites from "./components/Favorites";
import Login from "./components/Login";

function App() {
  return (
    <React.Fragment>
      <header>
        <CircusNav className="App-header" />
      </header>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/Prestations" component={Activities} />
        <Route path="/Favoris" component={Favorites} />
        <Route path="/connexion" component={Login} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
