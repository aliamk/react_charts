import React from "react";
import "./App.css";
import Home from "./component/home";
import DankMemes from "./component/DankMemes";
import amCharts from "./component/amCharts";
import Bar_Chart_3D from "./component/Bar_Chart_3D";
import Navbar from "./component/Navbar";
import ChartJS from "./component/chartJS";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Navbar />
          {/* A <Switch> looks through its children <Route>s and renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/home" component={Home}>
              {/* <home /> */}
            </Route>
            <Route path="/amCharts" component={amCharts}>
              {/* <amCharts /> */}
            </Route>
            <Route path="/chartJS" component={ChartJS}>
              {/* <chartJS /> */}
            </Route>
            <Route path="/Bar_Chart_3D" component={Bar_Chart_3D}>
              {/* <MoreDeets /> */}
            </Route>
            <Route path="/dankmemes" component={DankMemes}>
              {/* <DankMemes /> */}
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
