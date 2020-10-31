import React from "react";
import "./App.css";
import DankMemes from "./component/DankMemes";
import Features from "./component/Features";
import MoreDeets from "./component/MoreDeets";
import Navbar from "./component/Navbar";
import ChartJs_API_Data from "./component/ChartJs_API_Data";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        {/* A <Switch> looks through its children <Route>s and renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/features" component={Features}>
            <Features />
          </Route>
          <Route path="/ChartJs_API_Data" component={ChartJs_API_Data}>
            {/* <ChartJs_API_Data /> */}
          </Route>
          <Route path="/moredeets" component={MoreDeets}>
            {/* <MoreDeets /> */}
          </Route>
          <Route path="/dankmemes" component={DankMemes}>
            {/* <DankMemes /> */}
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default NavBar;
