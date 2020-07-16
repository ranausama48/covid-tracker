import React from "react";
import Cards from "./components/Cards/Cards";
import Charts from "./components/Charts/Charts";
import CountryPicker from "./components/CountryPicker/CountryPicker";

import "./App.css";

function App() {
  return (
    <div className="container">
      <Cards />
      <Charts />
      <CountryPicker />
    </div>
  );
}

export default App;
