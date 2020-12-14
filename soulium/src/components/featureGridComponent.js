import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";


const styles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "20px auto 30px"
  },
  paper: {
    height: "150px",
    width: "180px",
    margin: "20px auto 20px ",
    backgroundColor: "inherit"
  },
  control: {
    padding: theme.spacing(5)
  },
  img: {
    height: "150px",
    width: "180px",    
    src: "https://cdn2.iconfinder.com/data/icons/christian/100/Christian-28-512.png"  
  }
}));

export default function gridComponent() {
  const classes = styles();  
  let url = "https://cdn2.iconfinder.com/data/icons/christian/100/Christian-28-512.png"

  return (
    <Grid container className={classes.root} spacing={5}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={8}>
          {[0, 1, 2, 4, 5].map((value) => (
            <Grid key={value} item>
              <Paper className={classes.paper} >
              <img className={classes.img} src={url} alt="feature-icons"/>
              <p><strong>Premium Memorial</strong></p>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
