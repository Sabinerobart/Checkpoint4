import React from "react";
import "./App.scss";
import { Route, Switch } from "react-router-dom";
import CircusNav from "./components/CircusNav";
import Homepage from "./components/Homepage";
// import Activities from "./components/Activities";
// import Favorites from "./components/Favorites";
// import Profile from "./components/Profile";

function App() {
  return (
    <React.Fragment>
      <header>
        <CircusNav className="App-header" />
      </header>
      <Switch>
        <Route exact path="/" component={Homepage} />
        {/* <Route path="/Prestations" component={Activities} />
        <Route path="/Favoris" component={Favorites} />
        <Route path="/Profil" component={Profile} /> */}
      </Switch>
    </React.Fragment>
  );
}

export default App;
