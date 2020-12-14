import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "350px",
    height: "120px",
    margin: "30px 0"
  },
  cover: {
    width: "120px",
    height: "120px",
    borderRadius: "10px"
  }
}));

export default function MediaControlCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image="https://images.pexels.com/photos/1856142/pexels-photo-1856142.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        title="Live from space album cover"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h6" variant="h6">
            Marian Peter, 52y Old
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Reutlingen
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
}
