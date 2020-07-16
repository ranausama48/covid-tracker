import React, { useEffect } from "react";
import Cards from "./components/Cards/Cards";
import Charts from "./components/Charts/Charts";
import CountryPicker from "./components/CountryPicker/CountryPicker";
import { fetchData } from "./api";

import "./App.css";

function App() {
  useEffect(async () => {
    const data = await fetchData();
    console.log(data);
  }, []);

  return (
    <div className="container">
      <Cards />
      <Charts />
      <CountryPicker />
    </div>
  );
}

export default App;
