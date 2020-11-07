import React, { useLayoutEffect } from "react";
import "./Bar_Chart_3D.css";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";

const HomeChart = ({ rowData: gender }) => {
  //   console.log("rowDataOnly", gender);

  //   let genderField = [];
  //   let countryField = [];

  //   const dataObj = gender.map((gender) => genderField.push(gender));
  //   console.log(genderField);

  useLayoutEffect(() => {
    // Create chart instance
    let chart = am4core.create("chartdiv1", am4charts.PieChart);

    // for (const dataObj of rowData) {
    //   genderField.push(dataObj.gender);
    // }

    // Add data
    // chart.data = [dataObj];

    // And, for a good measure, let's add a legend
    // chart.legend = new am4charts.Legend();

    // Create pie series
    let series = chart.series.push(new am4charts.PieSeries());
    series.dataFields.value = "litres";
    series.dataFields.category = "country";

    chart.current = chart;

    return () => {
      chart.dispose();
    };
  }, []);

  return (
    <div className="container">
      <div className="chartdiv1"></div>
    </div>
  );
};

export default HomeChart;
