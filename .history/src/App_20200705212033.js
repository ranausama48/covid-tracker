import React, { useEffect, useState } from "react";
import Cards from "./components/Cards/Cards";
import Charts from "./components/Charts/Charts";
import CountryPicker from "./components/CountryPicker/CountryPicker";
import { fetchData } from "./api";
import { Grid } from "@material-ui/core";

import "./App.css";

function App() {
  const [state, setstate] = useState({ data: {} });
  useEffect(() => {
    async function getData() {
      const data = await fetchData();
      setstate({ data });
    }
    getData();
  }, []);
  const { data } = state;

  return (
    // <div className="container">
    //   <div>
    //     {/* <Cards data={data} />
    //     <Charts />
    //     <CountryPicker /> */}
    //   </div>
    // </div>
    <Grid fluid>Usama</Grid>
  );
}

export default App;
