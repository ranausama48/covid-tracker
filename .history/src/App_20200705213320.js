import React, { useEffect, useState } from "react";
import { fetchData } from "./api";
import { Container, Grid, Paper, makeStyles } from "@material-ui/core";

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
    <div className={classes.root}>
      <Container fluid>
        <Grid container spacing={2}>
          <Grid item md={5} xs={12}>
            <Grid
              container
              spacing={2}
              justify="space-between"
              alignItems="center"
            >
              <Grid item md={6} xs={12}>
                <Paper className={classes.paper}>xs=6</Paper>
              </Grid>
              <Grid item md={6} xs={12}>
                <Paper className={classes.paper}>xs=6</Paper>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={7} xs={12}>
            <Paper className={classes.paper}>xs=6</Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
