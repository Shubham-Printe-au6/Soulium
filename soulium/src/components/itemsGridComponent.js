import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import Item from './itemComponent';

const styles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: "absolute",
    bottom: "-40px"
  }
}));

export default function gridComponent() {
  const classes = styles();  

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={1}>
          {[0, 1, 2, 4, 5, 6].map((value) => (
            <Grid key={value} item>
            <Item />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
