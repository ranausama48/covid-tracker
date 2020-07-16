import React from "react";
import { makeStyles } from "@material-ui/core/styles";
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
  if (!props) {
    return "Loading...";
  }

  return (
    <Grid container spacing={3} justify="center">
      {console.log(confirmed)}
      <Grid item component={Card}>
        <CardContent>
          <Typography color="textSecondary">Infacted</Typography>
          <Typography varaint="h5"></Typography>
          <Typography color="textSecondary">Real Date</Typography>
          <Typography varaint="body2">
            Num of aactive cases of COVID19
          </Typography>
        </CardContent>
      </Grid>
      <Grid item component={Card}>
        <CardContent>
          <Typography color="textSecondary">Recoverd</Typography>
          <Typography varaint="h5"></Typography>
          <Typography color="textSecondary">Real Date</Typography>
          <Typography varaint="body2">
            Num of Recoverd cases from COVID19
          </Typography>
        </CardContent>
      </Grid>
      <Grid item component={Card}>
        <CardContent>
          <Typography color="textSecondary">Deaths</Typography>
          <Typography varaint="h5"></Typography>
          <Typography color="textSecondary">Real Date</Typography>
          <Typography varaint="body2">Num of Deaths COVID19</Typography>
        </CardContent>
      </Grid>
    </Grid>
  );
};

export default Cards;
