import React, { useEffect, useState } from "react";
import { fetchData } from "./api";
import { Container, Grid, Paper, makeStyles } from "@material-ui/core";
import Cards from "./components/Cards/Cards";
import Charts from "./components/Charts/Charts";
import CountryPicker from "./components/CountryPicker/CountryPicker";

import "./App.css";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function App() {
  const classes = useStyles();
  const [state, setstate] = useState({ data: {} });
  const [contry, setCountry] = useState({ country: "" });
  useEffect(() => {
    async function getData() {
      const data = await fetchData();
      setstate({ data });
    }
    getData();
  }, []);
  const onChangeHandler = (e) => {
    setCountry((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const { data } = state;

  return (
    <div className={classes.root}>
      <div>
        <CountryPicker />
      </div>
      <Container fluid>
        <Grid container spacing={2}>
          <Grid item md={3} xs={12}>
            <Cards data={data} />
          </Grid>
          <Grid item md={9} xs={12}>
            <Charts />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
