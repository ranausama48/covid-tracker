import axios from "axios";
const url = "https://covid19.mathdro.id/api";
const fetchData = async () => {
  try {
    axios.get(url);
  } catch (error) {}
};
