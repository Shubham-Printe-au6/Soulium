import React from 'react';
import Grid from '../semeteryGridComponent';
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";


const styles = makeStyles((theme) => ({
    card: {
        width: "300px",
        height: "50px",
        borderRadius: "0px 50px",
        padding: "5px 20px",
        lineHeight: "10px",
        color: "#c96262",
        position: "absolute",
        top: "50px",
        right: "100px",
        textAlign:"center",
    }
  }));

export default function section4() {
    const classes = styles();

    return (
        <div id="section4" className="py-5">
            <h3><strong>The virtual Cemetery</strong></h3>
            
            <Paper variant="outlined" square className={classes.card}>
                <h4> Field of Eternity</h4>
            </Paper>


            <p className="mx-auto my-3" style={{width:"650px"}}>On our vitual cemetery there are various places available on which to place your memorial.
                If place is available, you can move your memorial at any time to another cemetery.
            </p>
            <Grid num={3} />
        </div>
    )
}
