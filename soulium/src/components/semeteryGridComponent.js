import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Tomestone from './tomestoneComponent'


const styles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin:"150px 0"
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

export default function gridComponent(props) {
  const classes = styles();  
  let arr2 = [];
  let len = props.num+1;
  for(let i=1; i<len; i++){
    arr2.push(i);
  }

  return (
    <Grid container className={classes.root} spacing={2}>
      {arr2.map((value) => (
        <Grid key={value} item xs={12}>
            <Grid container justify="center" spacing={3}>
            {[0, 1, 2, 4, 5].map((value) => (
                <Grid key={value} item>
                <Tomestone />
                </Grid>
            ))}       
            </Grid>
        </Grid>
      ))}
    </Grid>
  );
}
