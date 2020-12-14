import { Button } from '@material-ui/core'
import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Grid from '../itemsGridComponent'


const styles = makeStyles((theme) => ({
    container: {
        padding:"100px"
    },
    title: {
        color: "grey",
        margin: "0 0 50px 0",
        fontSize: "35px"
    },
    data: {
      margin: "50px 0 50px 0",
      fontSize: "18px",
    }
  }));

export default function section9() {
    const classes = styles();  

    return (
        <div id="section9" className={classes.container}>
            <h3 className={classes.title}>The online cemetery in the internet, Grief Online</h3>
            <Button size="large" variant="contained" className="my-3 mx-2" color ="secondary"><strong>CREATE MEMORIAL</strong></Button>
            <p className={classes.data}>Newest <strong>GIFTS & CANDLES</strong> available</p>
            <Grid />
        </div>
    )
}
