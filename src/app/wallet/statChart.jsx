'use client';
import React, { useEffect } from 'react';
import Highcharts from 'highcharts';

const Balancechart = () => {
  useEffect(() => {
    // Dynamically import Highcharts modules inside useEffect
    const loadChart = async () => {
      const HighchartsAccessibility = await import('highcharts/modules/accessibility');
      const HighchartsExporting = await import('highcharts/modules/exporting');
      const HighchartsExportData = await import('highcharts/modules/export-data');
      const HighchartsSeriesLabel = await import('highcharts/modules/series-label');

      HighchartsAccessibility.default(Highcharts);
      HighchartsExporting.default(Highcharts);
      HighchartsExportData.default(Highcharts);
      HighchartsSeriesLabel.default(Highcharts);

      Highcharts.chart("spotwalletbalance", {
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: "pie",
          outline: false
        },
        title: {
          text: ""
        },
        tooltip: {
          pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>"
        },
        accessibility: {
          point: {
            valueSuffix: "%"
          }
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: "pointer",
            dataLabels: {
              enabled: false
            },
            showInLegend: true
          }
        },
        series: [{
          name: "Crypto",
          colorByPoint: true,
          borderRadius: 0,
          innerSize: "75%",
          data: [
            { name: "BTC 0.00310630", y: 8.369 },
            { name: "ETH 0.00000839", y: 2.369 },
            { name: "LTC 0.00000839", y: 11.369 },
            { name: "BNB 0.00000839", y: 2.369 },
            { name: "TRX 0.00000839", y: 7.369 },
            { name: "SOL 0.00000839", y: 8.369 },
            { name: "XRP 0.00000839", y: 6.369 },
            { name: "ADA 0.00000839", y: 5.369 },
            { name: "DOGE 0.00000839", y: 4.369 },
            { name: "TON 0.00000839", y: 3.369 },
            { name: "HYPE 0.00000839", y: 2.369 },
             { name: "USDT 0.00000839", y: 13.369 }
          ]
        }],
        legend: {
          layout: 'horizontal',
          align: 'center',
          verticalAlign: 'bottom',
          itemMarginTop: 5,
          itemMarginBottom: 0,
          itemStyle: {
            fontSize: '14px',
            color: '#001c23'
          }
        }
      });
    };

    loadChart();
  }, []);

  return (
    <div
      id="spotwalletbalance"
      className="spotbalancechart"
      style={{ width: '100%', height: '360px', outline: 'none' }}
    />
  );
};

export default Balancechart;
