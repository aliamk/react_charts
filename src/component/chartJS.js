import React from "react";
import HardcodedDataLineChart from "./chartJShardcodedData";
import ChartJsAPIData from './chartjsDynamicData'
import "./Box.css";

const ChartJS = () => {
  return (
    <div>
      <h2>ChartJS</h2>
      <div className="grid">
        <div className="box box1">
          <HardcodedDataLineChart />
        </div>
        <div className="box box2">
          <ChartJsAPIData />
        </div>
      </div>
    </div>
  );
};

export default ChartJS;
