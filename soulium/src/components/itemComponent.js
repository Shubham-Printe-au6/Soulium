import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    position: "relative",
    height: theme.spacing(20),
    width: theme.spacing(20),
    margin: "auto",

    "& > *": {
      margin: theme.spacing(5),
      border:"solid grey"
    }
  },
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    position: "absolute",
    bottom: "-25px",
    right: "50px"
  }
}));

export default function Item() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar
        alt="Remy Sharp"
        src="https://images.pexels.com/photos/1619493/pexels-photo-1619493.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        className={classes.large}
      />
    </div>
  );
}
