import React, { useLayoutEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";


/* ===================== PIE CHART ===================== */

const Chart1 = () => {
  useLayoutEffect(() => {
    am4core.addLicense("CH247079246");
    // Create chart instance
    let chart = am4core.create("chartdiv1", am4charts.PieChart);

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
    chart.legend = new am4charts.Legend();
    chart.legend.position = "right";
 

    // Create pie series
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "litres";
    pieSeries.dataFields.category = "country";

    pieSeries.colors.list = [
      am4core.color("#845EC2"),
      am4core.color("#D65DB1"),
      am4core.color("#FF6F91"),
      am4core.color("#FF9671"),
      am4core.color("#FFC75F"),
      am4core.color("#F9F871"),
    ];

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

export default Chart1;
