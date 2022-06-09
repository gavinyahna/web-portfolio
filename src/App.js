import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Webapps from "./pages/Webapps";
import Games from "./pages/Games";
import "./App.css";

import React from "react";
const App = () => {
  return (
    <>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/resume" component={Resume} />
            <Route path="/webapps" component={Webapps} />
            <Route path="/games" component={Games} />
        </Switch>
    </>
  );
};

export default App;
