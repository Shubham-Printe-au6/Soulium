import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";

const useStyles = makeStyles({
  root: {
    width: 250,
    margin: "auto",
    position: "relative",
    border: "solid grey"
  },
  title: {
    fontSize: 14,
    position: "relative"
  },
  icon: {
    color: "green"
  }
});

export default function Chat() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title}>
          <EventAvailableIcon className={classes.icon} />
          Word of the Day
        </Typography>

        <Typography variant="body2" component="p">
          How to get a good custom dissertation writing service
          <br />
        </Typography>
      </CardContent>
    </Card>
  );
}
