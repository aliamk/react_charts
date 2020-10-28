import React from "react";
import "./App.css";
import * as ReactBootStrap from "react-bootstrap";
import DankMemes from "./component/DankMemes";
import Features from "./component/Features";
import MoreDeets from "./component/MoreDeets";
import Navbar from "./component/Navbar";
import Pricing from "./component/Pricing";

const NavBar = () => {
  return (
    <div className="App">
      <Navbar />
    </div>
  );
};

export default NavBar;
