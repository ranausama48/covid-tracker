import React,useEffect from "react";
import Cards from "./components/Cards/Cards";
import Charts from "./components/Charts/Charts";
import CountryPicker from "./components/CountryPicker/CountryPicker";
import { fetchData } from "./api";

import "./App.css";

function App() {

useEffect(() => {
  effect
  return () => {
    cleanup
  }
}, [input])

  return (
    <div className="container">

      <Cards />
      <Charts />
      <CountryPicker />
    </div>
  );
}

export default App;
