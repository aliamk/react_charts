import React from "react";
// import MaterialTable from 'material-table'
import ChartTableChart from "./chartTableChart";
import ChartTableTable from "./chartTableTable";
import "./ChartTable.css";


const ChartTable = () => {
  return (
    <div className="container">
      <header></header>
      <ChartTableChart />
      <ChartTableTable />
    </div>
  );
};

export default ChartTable;
