import React from "react";
import "./Box.css";
import Chart1 from "./chart1";
import Chart2 from "./chart2";
import Chart3 from "./chart3";
import Chart4 from "./chart4";

const amCharts = () => {
  return (
    <div>
      <h2>AM Charts</h2>
      <div className="grid">
        <div className="box box1">
          <Chart1 /> {/* 3D Pie Chart */}
        </div>
        <div className="box box2">
          <Chart2 /> {/* Flower Chart */}
        </div>
        <div className="box box3">
          <Chart3 /> {/* Bell Curve Chart */}
        </div>
        <div className="box box4">
          <Chart4 /> {/*Time Line Chart */}
        </div>
      </div>
    </div>
  );
};

export default amCharts;
