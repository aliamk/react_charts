import React from "react";
// import MaterialTable from 'material-table'
import BasicTable from "./homeTable";
import "./home.css";
import axios from "axios";

const Home = () => {
  return (
    <div className="container">
      <header></header>
      <BasicTable />
    </div>
  );
};

export default Home;
