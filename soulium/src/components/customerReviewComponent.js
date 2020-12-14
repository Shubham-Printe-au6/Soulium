import React from 'react';
import { makeStyles } from "@material-ui/core/styles";


const styles = makeStyles((theme) => ({
    card: {
      height: "250px",
      width: "90%",
      margin: "0 0 0 auto ",
      padding:"50px 0",
      borderRadius: "15px 0 0 15px",
      position: "relative",
      backgroundImage: "linear-gradient(to right, #806f6f , white)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "auto 100%",
    },
    message: {
      width: "55%",
      margin: "0 auto 35px"
    },
    name: {
        fontSize: "20px"
    },
    image: {
        position: "absolute",
        borderRadius: "15px 0 0 15px",
        left: "0",
        top: "0",
        width: "auto",
        height: "100%",
        opacity: "0.3",
    }
  }));

export default function customerReviewComponent() {
    const classes = styles();  

    return (
        <div className="pt-5 container-fluid">
            <div className={classes.card}>
            <img className={classes.image} src= "https://ak.picdn.net/shutterstock/videos/32004232/thumb/1.jpg" alt="customer"/>
            <h3 className={classes.message}>"I made a memorial for my son that passed away and it has been very helpful to my family during this difficult time."</h3>

            <p className={classes.name}>John A, New York</p>
            </div>
        </div>
    )
}
