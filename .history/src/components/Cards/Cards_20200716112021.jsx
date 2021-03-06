import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CountUp from "react-countup";
import { CardContent, Typography, Grid, Paper } from "@material-ui/core";
import styled from "styled-components";
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

const DateContainer = styled.div``;

const Cards = (props) => {
  const classes = useStyles();
  const { confirmed, deaths, recovered, lastUpdate } = props.data;
  if (!confirmed) {
    return "Loading...";
  }

  return (
    <>
      <DateContainer>
        Last Update : {new Date(lastUpdate).toDateString()}
      </DateContainer>
      <Grid container spacing={2}>
        <Grid item md={12} sm={4} xs={12}>
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
        <Grid item md={12} sm={4} xs={12}>
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
        <Grid item md={12} sm={4} xs={12}>
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
