import React from "react";
import "../App.css";
import * as ReactBootStrap from "react-bootstrap";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="App">
      <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">

        <Link to="/home">
          <ReactBootStrap.Navbar.Brand href="#home">CHARTS</ReactBootStrap.Navbar.Brand>
        </Link>
        
        <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
          <ReactBootStrap.Nav className="mr-auto">
            
            <Link to="/amCharts">
              <ReactBootStrap.Nav.Link href="#amCharts">AM Charts</ReactBootStrap.Nav.Link>
            </Link>
            
            <Link to="/chartJS">
              <ReactBootStrap.Nav.Link href="#chartJS">ChartJs</ReactBootStrap.Nav.Link>
            </Link>
            {/*<ReactBootStrap.NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <ReactBootStrap.NavDropdown.Item href="#action/3.1">Action</ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item href="#action/3.2">Another action</ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item href="#action/3.3">Something</ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Divider />
              <ReactBootStrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBootStrap.NavDropdown.Item>
  </ReactBootStrap.NavDropdown> */}
          </ReactBootStrap.Nav>
          <ReactBootStrap.Nav>
            <Link to="/Bar_Chart_3D">
              <ReactBootStrap.Nav.Link href="#deets">Bar Chart 3D</ReactBootStrap.Nav.Link>
            </Link>
            <Link to="/dankmemes">
              <ReactBootStrap.Nav.Link eventKey={2} href="#memes">
                Timeline
              </ReactBootStrap.Nav.Link>
            </Link>
          </ReactBootStrap.Nav>
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>
    </div>
  );
};

export default Navbar;
