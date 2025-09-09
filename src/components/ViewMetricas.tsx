import React from "react";
import ReactApexChart from "react-apexcharts";

const ApexChart: React.FC = () => {
  const [state] = React.useState({
    series: [
      { name: 'Segmentos 1', data: [44, 55, 41, 67, 22, 43] },
      { name: 'Segmentos 2', data: [13, 23, 20, 8, 13, 27] },
      { name: 'Segmentos 3', data: [11, 17, 15, 15, 21, 14] },
      { name: 'Segmentos 4', data: [21, 7, 25, 13, 22, 8] },
      { name: 'Segmentos 5', data: [21, 7, 25, 13, 22, 8] }
    ],
    options: {
      chart: {
        type: 'bar',
        height: 350,
        stacked: true,
        toolbar: { show: true },
        zoom: { enabled: true }
      },
      responsive: [{
        breakpoint: 480,
        options: {
          legend: { position: 'bottom', offsetX: -10, offsetY: 0 }
        }
      }],
      plotOptions: {
        bar: {
          horizontal: false,
          borderRadius: 10,
          borderRadiusApplication: 'end',
          borderRadiusWhenStacked: 'last',
          dataLabels: {
            total: {
              enabled: true,
              style: { fontSize: '13px', fontWeight: 900 }
            }
          }
        }
      },
      xaxis: {
        type: 'month',
        categories: [
          'Jan 2024', 'Feb 2024', 'Mar 2024', 'Apr 2024', 'May 2024', 'Jun 2024'
        ]
      },
      legend: { position: 'right', offsetY: 40 },
      fill: { opacity: 1 }
    }
  });

  return (
    <div>
      <ReactApexChart options={state.options} series={state.series} type="bar" height={350} />
    </div>
  );
};

export default ApexChart;
