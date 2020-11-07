import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import "./hardcodedDataLineChart.css";

const HardcodedDataLineChart = () => {
  // useState Hook
  const [chartData, setChartData] = useState({});

  // Initial State
  const chart = () => {
    setChartData({
      labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      datasets: [
        {
          label: "level of thiccness",
          data: [33, 45, 12, 76, 69, 54, 21],
          backgroundColor: ["rgba(75, 192, 192, 0.6)"],
          borderWidth: 4,
        },
      ],
    });
  };

  // useEffect Hook
  useEffect(() => {
    chart();
  }, []);

  // Render
  return (
    <div className="App-chart">
      <h1 style={{ position: "absolute", top: "1em", marginTop: "1em" }}>Hard-Coded Data</h1>
      <div style={{ minHeight: "30vh", height: "50vh", minWidth: "30vw", width: "50vw", marginTop: "10em" }}>
        <Line
          data={chartData}
          options={{
            responsive: true,
            title: { text: "Using React's useState and useEffect Hooks", display: true },
            scales: {
              yAxes: [
                {
                  ticks: {
                    autoSkip: true,
                    maxTicksLimit: 10,
                    beginAtZero: true,
                  },
                  gridLines: {
                    display: false,
                  },
                },
              ],
              xAxes: [
                {
                  gridLines: {
                    display: false,
                  },
                },
              ],
            },
          }}
        />
      </div>
    </div>
  );
};

export default HardcodedDataLineChart;
