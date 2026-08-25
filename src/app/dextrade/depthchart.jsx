"use client";
// AmChartsWidget.tsx
import React, { useLayoutEffect } from 'react';
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import am5themes_Dark from "@amcharts/amcharts5/themes/Dark";
import { useTheme } from '../context/ThemeContext';

const DepthChart = () => {

  const { isNightMode } = useTheme();

const labelColor = isNightMode
  ? am5.color(0xffffff)
  : am5.color(0x0000);

  useLayoutEffect(() => {
    let root = am5.Root.new("chartdiv");

    root._logo.dispose();

    root.setThemes([
      am5themes_Animated.new(root),
      am5themes_Dark.new(root)
    ]);

    var chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        focusable: true,
        panX: false,
        panY: false,
        wheelX: "none",
        wheelY: "none"
      })
    );

    var title = chart.plotContainer.children.push(
      am5.Label.new(root, {
        text: "Price (BTC/USD)",
        fontSize: 20,
        fontWeight: "400",
        x: am5.p50,
        centerX: am5.p50
      })
    );

    // 🔥 Title label color = Black
    title.setAll({
      fill: labelColor
    });

    // Create X axis
    var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
      categoryField: "value",
      renderer: am5xy.AxisRendererX.new(root, {
        minGridDistance: 70
      }),
      tooltip: am5.Tooltip.new(root, {})
    }));

    xAxis.get("renderer").labels.template.adapters.add("text", function (text, target) {
      if (target.dataItem) {
        return root.numberFormatter.format(Number(target.dataItem.get("category")), "#.####");
      }
      return text;
    });

    // 🔥 X-axis label color = Black
    xAxis.get("renderer").labels.template.setAll({
      fill: labelColor
    });

    var yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        maxDeviation: 0.1,
        renderer: am5xy.AxisRendererY.new(root, {})
      })
    );

    // 🔥 Y-axis label color = Black
    yAxis.get("renderer").labels.template.setAll({
      fill: labelColor
    });

    // Add series
    var bidsTotalVolume = chart.series.push(am5xy.StepLineSeries.new(root, {
      minBulletDistance: 10,
      xAxis: xAxis,
      yAxis: yAxis,
      valueYField: "bidstotalvolume",
      categoryXField: "value",
      stroke: am5.color(0x00ff00),
      fill: am5.color(0x00ff00),
      tooltip: am5.Tooltip.new(root, {
        pointerOrientation: "horizontal",
        labelText: "[width: 120px]Ask:[/][bold]{categoryX}[/]\n[width: 120px]Total volume:[/][bold]{valueY}[/]\n[width: 120px]Volume:[/][bold]{bidsvolume}[/]"
      })
    }));
    bidsTotalVolume.strokes.template.set("strokeWidth", 2);
    bidsTotalVolume.fills.template.setAll({
      visible: true,
      fillOpacity: 0.2
    });

    var asksTotalVolume = chart.series.push(am5xy.StepLineSeries.new(root, {
      minBulletDistance: 10,
      xAxis: xAxis,
      yAxis: yAxis,
      valueYField: "askstotalvolume",
      categoryXField: "value",
      stroke: am5.color(0xf00f00),
      fill: am5.color(0xff0000),
      tooltip: am5.Tooltip.new(root, {
        pointerOrientation: "horizontal",
        labelText: "[width: 120px]Ask:[/][bold]{categoryX}[/]\n[width: 120px]Total volume:[/][bold]{valueY}[/]\n[width: 120px]Volume:[/][bold]{asksvolume}[/]"
      })
    }));
    asksTotalVolume.strokes.template.set("strokeWidth", 2);
    asksTotalVolume.fills.template.setAll({
      visible: true,
      fillOpacity: 0.2
    });

    var bidVolume = chart.series.push(am5xy.ColumnSeries.new(root, {
      minBulletDistance: 10,
      xAxis: xAxis,
      yAxis: yAxis,
      valueYField: "bidsvolume",
      categoryXField: "value",
      fill: am5.color(0x000000)
    }));
    bidVolume.columns.template.set("fillOpacity", 0.2);

    var asksVolume = chart.series.push(am5xy.ColumnSeries.new(root, {
      minBulletDistance: 10,
      xAxis: xAxis,
      yAxis: yAxis,
      valueYField: "asksvolume",
      categoryXField: "value",
      fill: am5.color(0x000000)
    }));
    asksVolume.columns.template.set("fillOpacity", 0.2);

    var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
      xAxis: xAxis
    }));
    cursor.lineY.set("visible", false);

    function loadData() {
      am5.net.load("https://poloniex.com/public?command=returnOrderBook&currencyPair=BTC_ETH&depth=50")
        .then((result) => {
          var data = am5.JSONParser.parse(result.response);
          parseData(data);
        })
        .catch(function () {
          parseData({
            "asks": [
              ["0.07070", 1.0], ["0.07071", 1.654], ["0.07076", 0.61]
            ],
            "bids": [
              ["0.07060", 1.001], ["0.07059", 1.544], ["0.07056", 0.61]
            ]
          });
        });
    }

    function parseData(data) {
      var res = [];
      processData(data.bids, "bids", true, res);
      processData(data.asks, "asks", false, res);

      xAxis.data.setAll(res);
      bidsTotalVolume.data.setAll(res);
      asksTotalVolume.data.setAll(res);
      bidVolume.data.setAll(res);
      asksVolume.data.setAll(res);
    }

    loadData();
    setInterval(loadData, 30000);

    function processData(list, type, desc, res) {
      for (var i = 0; i < list.length; i++) {
        list[i] = {
          value: Number(list[i][0]),
          volume: Number(list[i][1])
        };
      }

      list.sort((a, b) => a.value - b.value);

      if (desc) {
        for (var i = list.length - 1; i >= 0; i--) {
          if (i < list.length - 1) {
            list[i].totalvolume = list[i + 1].totalvolume + list[i].volume;
          } else {
            list[i].totalvolume = list[i].volume;
          }
          var dp = {};
          dp["value"] = list[i].value;
          dp[type + "volume"] = list[i].volume;
          dp[type + "totalvolume"] = list[i].totalvolume;
          res.unshift(dp);
        }
      } else {
        for (var i = 0; i < list.length; i++) {
          if (i > 0) {
            list[i].totalvolume = list[i - 1].totalvolume + list[i].volume;
          } else {
            list[i].totalvolume = list[i].volume;
          }
          var dp = {};
          dp["value"] = list[i].value;
          dp[type + "volume"] = list[i].volume;
          dp[type + "totalvolume"] = list[i].totalvolume;
          res.push(dp);
        }
      }
    }

    return () => {
      root.dispose();
    };

  }, [isNightMode]);

  return <div id="chartdiv"></div>;
};

export default DepthChart;
