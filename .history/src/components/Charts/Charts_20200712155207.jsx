import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { fetchDailyData } from "../../api";

const Charts = ({ data: { confirmed, recovered, deaths }, country }) => {
  const [dailyData, setDailyData] = useState([]);
  useEffect(() => {
    async function fetchDaily() {
      setDailyData(await fetchDailyData());
    }
    fetchDaily();
  }, []);

  const data = {
    labels: dailyData.map(({ date }) => date),
    // labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Confirmed",
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
        data: confirmed.map(({ confirmed }) => confirmed),
      },
      {
        label: "Deaths",
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
        data: deaths.map(({ deaths }) => deaths),
      },
    ],
  };
  // const lineChart = (

  // )
  return (
    <div>
      {console.log("dailyData", dailyData)}
      {dailyData.length ? (
        <Line style={{ width: "80%" }} data={data} />
      ) : (
        <div>Chart Is Loding.....</div>
      )}
    </div>
  );
};

export default Charts;
