import axios from "axios";
const url = "https://covid19.mathdro.id/api";
const dailyData = "";
export const fetchData = async () => {
  try {
    const { data } = await axios.get(url);
    const { confirmed, recovered, deaths, lastUpdate } = data;
    return {
      confirmed,
      recovered,
      deaths,
      lastUpdate,
    };
  } catch (error) {
    return error;
  }
};
export const fetchDailyData = async () => {
  try {
    const response = await axios.get(`${url}/daily`);
    console.log(response);
  } catch (error) {}
};
