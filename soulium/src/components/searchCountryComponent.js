import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import LanguageIcon from '@material-ui/icons/Language';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

let url =
  "https://images.pexels.com/photos/592753/pexels-photo-592753.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "350px",
    position: "relative",
    padding:"50px 0 40px 0"
  },
  actions: {
    width: "35%",
    height: "60px",
    margin: "50px auto",
    borderRadius: "50px",
    backgroundColor: "#46b83c",
    padding:"10px 0px 10px 20px"
  },
  image: {
    position: "absolute",
    left: "0px",
    top: "0",
    width: "100%",
    height: "100%",
    opacity: "0.2"
  },
  input: {
    width: "550px",
  },
  icon:{
    marginBottom: "5px",
    height: "30px",
    width: "30px",
    color: "white"
  }
});

export default function SearchCountry() {
  const classes = useStyles();

  return (
    <div className="">
        <Card className={classes.root}>
            <img className={classes.image} src={url} alt="customer" />
            <h3 className="mt-5"><strong>Access Memorials by Countries</strong></h3>
            <CardActions className={classes.actions}>
                <div>
                    <Grid container spacing={1} alignItems="flex-end">
                    <Grid item>
                        <LanguageIcon className={classes.icon} />
                    </Grid>
                    <Grid item>
                        <TextField
                        className={classes.input}
                        id="input-with-icon-grid"
                        label="Type country name: ex. Brazil"
                        />
                    </Grid>
                    <Grid item>
                        <ArrowRightAltIcon className={classes.icon} />
                    </Grid>
                    </Grid>
                </div>
                </CardActions>
        </Card>
    </div>
  );
}
