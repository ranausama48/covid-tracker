import React from "react";
import { Bar } from "react-chartjs-2";

const data = {
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Act",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 65, 59],
    },
    {
      label: "My second dataset",
      backgroundColor: "rgba(255,99,12,0.4)",
      borderColor: "rgba(255,99,12,0.4)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,99,13,0.4)",
      hoverBorderColor: "rgba(255,99,12,1)",
      data: [100, 21.5, 20, 81, 5.6, 35, 90],
    },
  ],
};

const BarChart = () => {
  return (
    <div>
      <h2>Bar Example (custom size)</h2>
      <Bar
        data={data}
        width={100}
        height={200}
        options={{
          maintainAspectRatio: false,
        }}
      />
    </div>
  );
};

export default BarChart;
