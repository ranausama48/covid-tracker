import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { fetchDailyData } from "../../api";

const Charts = () => {
  const [dailyData, setDailyData] = useState([]);
  useEffect(() => {
    async function fetchDaily() {
      setDailyData(await fetchDailyData());
    }
    fetchDaily();
  }, []);

  const data = {
    labels3:{dailyData((data)=>([data.date]))},
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "My First dataset",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [0, 110, 45, 81, 56, 55, 0],
      },
      {
        label: "My second dataset",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "red",
        borderColor: "rgba(75,192,19,5)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,12,0,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [100, 59, 80, 81, 56, 55, 0],
      },
    ],
  };
  return (
    <div>
      {console.log(dailyData)}
      <Line data={data} />
    </div>
  );
};

export default Charts;
