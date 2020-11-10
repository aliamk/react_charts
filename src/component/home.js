import React from "react";
// import MaterialTable from 'material-table'
import HomeChart from "./homeChart";
import BasicTable from "./homeTable";
import "./home.css";


const Home = () => {
  return (
    <div className="container">
      <header></header>
      <HomeChart />
      <BasicTable />
    </div>
  );
};

export default Home;
