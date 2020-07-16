import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CountUp from "react-countup";
import { CardContent, Typography, Grid, Paper } from "@material-ui/core";
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const Cards = (props) => {
  const classes = useStyles();
  const { confirmed, deaths, recovered, lastUpdate } = props.data;
  if (!confirmed) {
    return "Loading...";
  }

  return (
    <>
      <div>Last Update : {new Date(lastUpdate).toDateString()}</div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <CardContent>
              <Typography color="textSecondary">Total Cases</Typography>
              <Typography varaint="h5">
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
              <Typography color="textSecondary">Total Recoverd</Typography>
              <Typography varaint="h5">
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
              <Typography color="textSecondary">Total Deaths</Typography>
              <Typography varaint="h5">
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
