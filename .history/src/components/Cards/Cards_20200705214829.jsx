import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CountUp from "react-countup";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Grid,
} from "@material-ui/core";
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
    <Grid container justify="center">
      <div>Last Update : {new Date(lastUpdate).toDateString()}</div>
      <Grid item component={Card}>
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
          <Typography color="textSecondary">
            {new Date(lastUpdate).toDateString()}
          </Typography>
        </CardContent>
      </Grid>
      <Grid item component={Card}>
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
          <Typography color="textSecondary">
            {new Date(lastUpdate).toDateString()}
          </Typography>
        </CardContent>
      </Grid>
      <Grid item component={Card}>
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
          <Typography color="textSecondary">
            {new Date(lastUpdate).toDateString()}
          </Typography>
        </CardContent>
      </Grid>
    </Grid>
  );
};

export default Cards;
