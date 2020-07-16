import axios from "axios";
const url = "https://covid19.mathdro.id/api";
export const fetchData = async () => {
  try {
    const { data } = await axios.get(url);
    const { confirmed, recovered, deaths, lastUpdate } = data;
    const modifiedData = {
      confirmed,
      recovered,
      deaths,
      lastUpdate,
    };
    return modifiedData;
  } catch (error) {
    return error;
  }
};
