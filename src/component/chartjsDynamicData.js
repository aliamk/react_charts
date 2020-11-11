import Axios from "axios";
import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
// import "./DankMemes.css";

const ChartJsAPIData = () => {
  // useState Hook
  const [chartData, setChartData] = useState({});
  const [employeeSalary, setEmployeeSalary] = useState([]);
  const [employeeAge, setEmployeeAge] = useState([]);

  // Initial State
  const chart = () => {
    let employeeSalary = [];
    let employeeAge = [];

    // console.log(employeeSalary, employeeAge);
  };

  // useEffect Hook
  useEffect(() => {
    Axios.get("https://dummy.restapiexample.com/api/v1/employees")
      .then((response) => {
        // console.log(response);
        for (const dataObj of response.data.data) {
          employeeSalary.push(parseInt(dataObj.employee_salary));
          employeeAge.push(parseInt(dataObj.employee_age));
        }
        setChartData({
          labels: employeeAge,
          datasets: [
            {
              label: "Salary and Age Correlation",
              data: employeeSalary,
              backgroundColor: ["rgba(75, 192, 192, 0.6)"],
              borderWidth: 4,
            },
          ],
        });
      })
      .catch((error) => {
        console.log(error);
      });

    chart();
  }, []);

  return (
    <div className="App-chart">
      <h1 style={{ position: "absolute", top: "1em", marginTop: "0.5em" }}>Dynamic Data from API Request</h1>
      <div style={{ minHeight: "30vh", height: "50vh", minWidth: "30vw", width: "50vw", marginTop: "10em" }}>
        <Line
          data={chartData}
          options={{
            responsive: true,
            scales: {
              yAxes: [
                {
                  ticks: {
                    autoSkip: true,
                    maxTicksLimit: 10,
                    beginAtZero: true,
                  },
                  gridLines: {
                    display: true,
                  },
                },
              ],
              xAxes: [
                {
                  gridLines: {
                    display: true,
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

export default ChartJsAPIData;
