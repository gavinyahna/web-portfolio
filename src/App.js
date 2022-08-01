import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Webapps from "./pages/Webapps";
import Games from "./pages/Games";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import "./App.css";

import React from "react";
const App = () => {
  return (
    <>
      <div className="home-background">
        <Header/>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/resume" component={Resume} />
            <Route path="/webapps" component={Webapps} />
            <Route path="/games" component={Games} />
          </Switch>
        <Footer/>
      </div>
    </>
  );
};

export default App;
