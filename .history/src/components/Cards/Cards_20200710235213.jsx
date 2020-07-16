import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CountUp from "react-countup";
import { fetchData } from "../../api";

import { CardContent, Typography, Grid, Paper } from "@material-ui/core";
const useStyles = makeStyles({
  tittleFont: {
    color: "#AEAED5",
    marginBottom: "5px",
    fontWeight: "normal",
    fontSize: "14px",
  },
  valueFont: {
    color: "black",
    fontWeight: "normal",
    fontSize: "24px",
  },
});

const Cards = (props) => {
  const classes = useStyles();
  const [state, setstate] = useState({ data: {} });
  useEffect(() => {
    async function getData() {
      const data = await fetchData();
      setstate({ data });
    }
    getData();
  }, []);
  const { confirmed, deaths, recovered, lastUpdate } = state;
  if (!confirmed) {
    return "Loading...";
  }

  return (
    <>
      {console.log(state)}
      <div>Last Update : {new Date(lastUpdate).toDateString()}</div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <CardContent>
              <Typography className={classes.tittleFont} color="textSecondary">
                Total Cases
              </Typography>
              <Typography varaint="h5" className={classes.valueFont}>
                <CountUp
                  start={0}
                  end={confirmed.value}
                  duration={2.5}
                  separator=","
                />
              </Typography>
            </CardContent>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <CardContent>
              <Typography className={classes.tittleFont} color="textSecondary">
                Total Recoverd
              </Typography>
              <Typography varaint="h5" className={classes.valueFont}>
                <CountUp
                  start={0}
                  end={recovered.value}
                  duration={2.5}
                  separator=","
                />
              </Typography>
            </CardContent>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <CardContent>
              <Typography className={classes.tittleFont} color="textSecondary">
                Total Deaths
              </Typography>
              <Typography varaint="h5" className={classes.valueFont}>
                <CountUp
                  start={0}
                  end={deaths.value}
                  duration={2.5}
                  separator=","
                />
              </Typography>
            </CardContent>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default Cards;
