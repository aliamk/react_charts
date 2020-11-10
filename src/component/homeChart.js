import React, { useLayoutEffect, useEffect, useState } from "react";
import "./Box.css";
import { fetchData } from "../api/index";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";

const HomeChart = () => {
  useLayoutEffect(() => {
    // Create chart instance
    let chart = am4core.create("chartdiv8", am4charts.PieChart);

    // Add data
    chart.data = [
      {
        country: "Lithuania",
        litres: 501.9,
      },
      {
        country: "Czech Republic",
        litres: 301.9,
      },
      {
        country: "Ireland",
        litres: 201.1,
      },
      {
        country: "Germany",
        litres: 165.8,
      },
      {
        country: "Australia",
        litres: 139.9,
      },
      {
        country: "Austria",
        litres: 128.3,
      },
      {
        country: "UK",
        litres: 99,
      },
      {
        country: "Belgium",
        litres: 60,
      },
      {
        country: "The Netherlands",
        litres: 50,
      },
    ];

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
    <div className="container-inner">
      <div className="chartdiv8" style={{ height: "80vh" }}></div>
    </div>
  );

  //   const [countryData, setCountryData] = useState([]);
  //   useEffect(() => {
  //     (async () => {
  //       const rowData = await fetchData();

  // //   push all countries into the countryField array
  // let countryField = [];
  // for (const dataObj of rowData) {
  //   countryField.push(dataObj.location.country);
  // }

  //       //   console.log("countryField", countryField);
  //       //   tally the number of times a country appears in the array
  //       let count = {};
  //       countryField.forEach((i) => {
  //         count[i] = (count[i] || 0) + 1;
  //       });

  //       //   console.log("countryArray", countryArray);
  //       //   return countryArray;
  //       setCountryData(count);
  //     })();
  //   }, []);

  //   let chart = am4core.create("chartdiv", am4charts.PieChart);

  //   // Add data
  //   chart.data = count;
  //   console.log("count", count);

  //   let series = chart.series.push(new am4charts.PieSeries());
  //   series.dataFields.value = "Total";
  //   series.dataFields.category = "Country";

  //   chart.current = chart;

  //   return () => {
  //     chart.dispose();
  //   };

  //   useLayoutEffect((countryData) => {
  //     // Create chart instance
  //     let chart = am4core.create("chartdiv1", am4charts.PieChart);

  //     // Add data
  //     chart.data = countryData;
  //     console.log("countryData", countryData);

  // const rowData = data.results;
  //
  //   let newArray = Object.entries(count);
  //   console.log("newArray: ", newArray);
  //   newArray = count.map((x) => "country: " + x);

  //   console.log(newestArray);
  //   for (const dataObj of newArray) {
  //     "country: " + Object.keys(count) + "total: " + Object.values(count);
  //     console.log("newArray", newArray);

  // And, for a good measure, let's add a legend
  // chart.legend = new am4charts.Legend();

  // Create pie series
  //     let series = chart.series.push(new am4charts.PieSeries());
  //     series.dataFields.value = "Total";
  //     series.dataFields.category = "Country";

  //     chart.current = chart;

  //     return () => {
  //       chart.dispose();
  //     };
  //   }, []);

  //   return (
  //     <div className="container">
  //       <div className="chartdiv1"></div>
  //     </div>
  //   );
};

export default HomeChart;
