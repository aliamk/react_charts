import React, { useLayoutEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";



/* ===================== PIE CHART ===================== */

const DonutChart = () => {
  useLayoutEffect(() => {
    am4core.addLicense("CH247079246");
    // Create chart instance
    am4core.useTheme(am4themes_animated);

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

    // Add and configure Series
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "litres";
    pieSeries.dataFields.category = "country";
    pieSeries.innerRadius = am4core.percent(50);
    pieSeries.ticks.template.disabled = true;
    pieSeries.labels.template.disabled = true;

    let rgm = new am4core.RadialGradientModifier();
    rgm.brightnesses.push(-0.8, -0.8, -0.5, 0, - 0.5);
    pieSeries.slices.template.fillModifier = rgm;
    pieSeries.slices.template.strokeModifier = rgm;
    pieSeries.slices.template.strokeOpacity = 0.4;
    pieSeries.slices.template.strokeWidth = 0;

    chart.legend = new am4charts.Legend();
    chart.legend.position = "right";
    chart.legend.maxWidth = 300;
    // chart.legend.maxHeight = 350;
    chart.legend.scrollable = true;

    return () => {
      chart.dispose();
    };
  }, []);

  return (
    <div className="container">
      <div className="chartdiv8" style={{ height: "100vh"}}></div>
    </div>
  );
};

export default DonutChart;
