import React from "react";
import ReactApexChart from "react-apexcharts";

const ApexChart: React.FC = () => {
  React.useEffect(() => {
    fetch('/api/metricas')
      .then((res) => res.json())
      .then((data) => {
        setState((prev) => ({
          ...prev,
          series: data.series,
          options: {
            ...prev.options,
            xaxis: {
              ...prev.options.xaxis,
              categories: data.categories
            }
          },
        }));
      });
  }, []);
  const [state, setState] = React.useState({
    series: [],
    options: {
      chart: {
        type: "bar",
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
function setState(arg0: (prev: any) => any) {
  throw new Error("Function not implemented.");
}

