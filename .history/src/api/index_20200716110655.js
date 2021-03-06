import axios from "axios";
const url = "https://covid19.mathdro.id/api";
export const fetchData = async (country) => {
  console.log("country", country);
  let changeableUrl = url;

  // if (country !== "global") changeableUrl = `${url}/countries/${country}`;

  if (country) {
    changeableUrl = `${url}/countries/${country}`;
  }
  try {
    const { data } = await axios.get(changeableUrl);
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
    const { data } = await axios.get(`${url}/daily`);
    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));
    return modifiedData;
  } catch (error) {}
};

export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);

    const country = countries.map((country) => country.name);
    return country;
  } catch (error) {}
};
