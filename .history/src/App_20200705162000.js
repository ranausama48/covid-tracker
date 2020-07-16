import React, { useEffect, useState } from "react";
import Cards from "./components/Cards/Cards";
import Charts from "./components/Charts/Charts";
import CountryPicker from "./components/CountryPicker/CountryPicker";
import { fetchData } from "./api";

import "./App.css";

function App() {
  const [state, setstate] = useState({});
  useEffect(() => {
    async function getData() {
      const data = await fetchData();
      setstate(data);
    }
    getData();
  }, []);

  return (
    <div className="container">
      {console.log(state)}
      <Cards data={state.data} />
      <Charts />
      <CountryPicker />
    </div>
  );
}

export default App;
