import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    position: "relative",
    height: theme.spacing(20),
    width: theme.spacing(30),
    margin: "auto",

    "& > *": {
      margin: theme.spacing(10),
      border:"solid green"
    }
  },
  large: {
    width: theme.spacing(12),
    height: theme.spacing(12),
    position: "absolute",
    bottom: "-25px",
    right: "50px"
  },
  card: {
    width: "150px",
    height: "30px",
    borderRadius: "10px",
    padding: "0px 20px",
    lineHeight: "10px",
    position: "absolute",
    top: "5px",
    left: "-30px",
    textAlign:"left"

  },
  date: {
    fontSize: "8px",
    color: "grey"
  },
  name: {
    fontSize: "12px"
  }
}));

export default function Tomestone() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar
        alt="Remy Sharp"
        src="https://images.pexels.com/photos/5119214/pexels-photo-5119214.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        className={classes.large}
      />

      <Paper variant="outlined" square className={classes.card}>
        <strong className={classes.name}>Marta Patterson</strong>
        <p className={classes.date}>15.06.1939 - 21.08.2011</p>
      </Paper>
    </div>
  );
}
