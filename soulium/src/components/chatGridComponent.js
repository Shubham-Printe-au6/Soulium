import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import Chat from './chatComponent';

const styles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "50px 0 100px"
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
                <Chat />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
