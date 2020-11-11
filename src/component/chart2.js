import React, { useLayoutEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";


/* ===================== FLOWER CHART ===================== */
const Chart2 = () => {
  useLayoutEffect(() => {
    // Create chart instance
    let chart2 = am4core.create("chartdiv2", am4charts.RadarChart);
    chart2.hiddenState.properties.opacity = 0; // this creates initial fade-in

    chart2.data = [
      {
        category: "One",
        value1: 8,
        value2: 2,
      },
      {
        category: "Two",
        value1: 11,
        value2: 4,
      },
      {
        category: "Three",
        value1: 7,
        value2: 6,
      },
      {
        category: "Four",
        value1: 13,
        value2: 8,
      },
      {
        category: "Five",
        value1: 12,
        value2: 10,
      },
      {
        category: "Six",
        value1: 15,
        value2: 12,
      },
      {
        category: "Seven",
        value1: 9,
        value2: 14,
      },
      {
        category: "Eight",
        value1: 6,
        value2: 16,
      },
    ];

    chart2.padding(10, 10, 10, 10);
    let categoryAxis = chart2.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "category";
    categoryAxis.renderer.labels.template.location = 0.5;
    categoryAxis.renderer.tooltipLocation = 0.5;
    categoryAxis.renderer.cellStartLocation = 0.2;
    categoryAxis.renderer.cellEndLocation = 0.8;

    let valueAxis2 = chart2.yAxes.push(new am4charts.ValueAxis());
    valueAxis2.tooltip.disabled = true;
    valueAxis2.renderer.labels.template.horizontalCenter = "left";
    valueAxis2.min = 0;

    let series1 = chart2.series.push(new am4charts.RadarColumnSeries());
    series1.columns.template.tooltipText = "{name}: {valueY.value}";
    series1.columns.template.width = am4core.percent(100);
    series1.name = "Series 1";
    series1.dataFields.categoryX = "category";
    series1.dataFields.valueY = "value1";

    let series2 = chart2.series.push(new am4charts.RadarColumnSeries());
    series2.columns.template.width = am4core.percent(100);
    series2.columns.template.tooltipText = "{name}: {valueY.value}";
    series2.name = "Series 2";
    series2.dataFields.categoryX = "category";
    series2.dataFields.valueY = "value2";

    chart2.seriesContainer.zIndex = -1;

    chart2.cursor = new am4charts.RadarCursor();
    chart2.cursor.xAxis = categoryAxis;
    chart2.cursor.fullWidthXLine = true;
    chart2.cursor.lineX.strokeOpacity = 0;
    chart2.cursor.lineX.fillOpacity = 0.1;
    chart2.cursor.lineX.fill = am4core.color("#000000");

    chart2.current = chart2;

    return () => {
      chart2.dispose();
    };
  }, []);

  return (
    <div className="container">
      <div className="chartdiv2"></div>
    </div>
  );
};

export default Chart2;
