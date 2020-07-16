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
  return (
    <Grid container spacing={3} justify="center">
      <Grid item component={Card}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography guuterBottom color="textSecondary">
            Infacted
          </Typography>
          <Typography varaint="h5">Real Data</Typography>
          <Typography color="textSecondary">Real Date</Typography>
          <Typography varaint="body2">
            Num of aactive cases of COVID19
          </Typography>
        </CardContent>
      </Grid>
    </Grid>
  );
};

export default Cards;
