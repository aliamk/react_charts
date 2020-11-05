import React, { useLayoutEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import Box from "./Box.css";

/* ===================== BELL CURVE SERIES ===================== */
const Chart3 = () => {
  useLayoutEffect(() => {
    // Create chart instance
    am4core.useTheme(am4themes_animated);
    let chart3 = am4core.create("chartdiv3", am4charts.XYChart);
    chart3.hiddenState.properties.opacity = 0; // this makes initial fade in effect

    // Title
    let title = chart3.titles.create();
    title.text = "Biggest U.S. retailers by 2018 revenue";
    title.fontSize = 14;
    title.marginTop = -10;
    title.marginBottom = 5;

    // Set format
    chart3.numberFormatter.numberFormat = "'[font-size: 10]US$[/] [bold]'#.0B";
    // Create axes
    let categoryAxis3 = chart3.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis3.renderer.grid.template.location = 0;
    categoryAxis3.renderer.labels.template.disabled = true;
    categoryAxis3.dataFields.category = "category";
    let valueAxis = chart3.yAxes.push(new am4charts.ValueAxis());

    // Set data
    chart3.data = [
      {
        category: "",
        Walmart: 387.66,
        "Amazon.com": 300.93,
        "The Kroger Co.": 220.7,
        Costco: 210.43,
        "Walgreens Boots Alliance": 98.39,
        "The Home Depot": 97.27,
        "CVS Health Corporation": 83.79,
        Target: 79.48,
        "Lowe's Companies": 64.09,
        "Albertsons Companies": 59.71,
      },
    ];

    // Series
    let data = chart3.data[0];
    for (var key in data) {
      if (data.hasOwnProperty(key) && key !== "category") {
        let series3 = chart3.series.push(new am4charts.CurvedColumnSeries());
        series3.dataFields.categoryX = "category";
        series3.dataFields.valueY = key;
        series3.name = key;
        series3.tooltipText = "{name}: {valueY.value}";
        series3.columns.template.strokeWidth = 2;
        series3.columns.template.strokeOpacity = 1;
        series3.columns.template.fillOpacity = 0;
        series3.columns.template.width = am4core.percent(100);
        series3.clustered = false;
      }
    }
    // Cursor
    chart3.cursor = new am4charts.XYCursor();
    chart3.cursor.maxTooltipDistance = 10;
    // Legend
    chart3.legend = new am4charts.Legend();
    chart3.legend.fontSize = 12;
    chart3.legend.position = "right";
    chart3.legend.valign = "top";
    chart3.legend.marginTop = 0;
    chart3.legend.labels.template.width = 100;
    chart3.legend.labels.template.truncate = true;
    chart3.legend.valueLabels.template.text = "{valueY.close}";
    chart3.legend.valueLabels.template.fontSize = 12;

    chart3.current = chart3;

    return () => {
      chart3.dispose();
    };
  }, []);

  return (
    <div className="container">
      <div className="chartdiv3"></div>
    </div>
  );
};

export default Chart3;
