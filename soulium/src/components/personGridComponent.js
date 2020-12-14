import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import Person from './personComponent';

const styles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    height: "230px",
    width: "250px",
    margin: "50px auto 100px "
  },
  control: {
    padding: theme.spacing(2)
  }
}));

export default function gridComponent() {
  const classes = styles();  

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={3}>
          {[0, 1, 2, 4, 5].map((value) => (
            <Grid key={value} item>
              <Paper className={classes.paper} >
                <Person />
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
