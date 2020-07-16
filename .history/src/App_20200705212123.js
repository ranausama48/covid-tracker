import React, { useEffect, useState } from "react";
import { fetchData } from "./api";
import { Container } from "@material-ui/core";

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
    <Container fluid>Usama</Container>
  );
}

export default App;
