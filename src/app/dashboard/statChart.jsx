"use client";

import React, { useEffect, useState } from "react";
import Highcharts, { width } from "highcharts";
import HighchartsReact from "highcharts-react-official";

// Only import modules (do NOT call them)
import "highcharts/modules/exporting";
import "highcharts/modules/export-data";
import "highcharts/modules/accessibility";

const StatChart = () => {
  const [options, setOptions] = useState(null);

  useEffect(() => {

    const data = [
      [Date.UTC(2026, 0, 1), 10],
      [Date.UTC(2026, 0, 2), 15],
      [Date.UTC(2026, 0, 3), 12],
      [Date.UTC(2026, 0, 4), 18],
      [Date.UTC(2026, 0, 5), 16],
      [Date.UTC(2026, 0, 6), 20],
      [Date.UTC(2026, 0, 7), 22]
    ];

    setOptions({
      chart: {
        type: "area",
        height: 80,
        backgroundColor: "transparent",
        spacing: [10, 0, 10, 0]
      },

      title: { text: "" },

      xAxis: {
        type: "datetime",
        labels: { enabled: false },
        lineWidth: 0,
        tickLength: 0
      },

      yAxis: {
        title: { text: null },
        labels: { enabled: false },
        gridLineWidth: 0
      },

      legend: { enabled: false },

      plotOptions: {
        area: {
          marker: {
            enabled: false
          },
          lineWidth: 2,
          color: "#1a8b69",
          fillOpacity: 0.25
        }
      },

      series: [
        {
          type: "area",
          name: "Demo Data",
          data: data
        }
      ],

      credits: { enabled: false }
    });

  }, []);

  if (!options) return <p>Loading chart...</p>;

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default StatChart;