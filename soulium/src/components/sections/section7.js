import { makeStyles } from "@material-ui/core/styles";

import React from 'react';

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
    jumbo: {
        margin: "auto"
    },
    container: {
        width: "100%",
        textAlign: "left",
        color: "white",
        padding:"150px 0 0 0"
    },
    img: {
        borderRadius: "30px 30px 0 0",
        width: "600px",
        margin: "0 0 0 100px"

    }
  }));


export default function section7() {
    const classes = styles();  

    return (
        <div id="section7" className={classes.container}>
            <div className="container">
                <div className="row">
                    <div className="col">
                    <div className={classes.jumbo}>
                        <h1 className="display-6 mb-4"><strong>A trusted digital platform <br/> to share your legacy</strong></h1>
                        <p className="lead mb-5">Choose prominent place for your memorial. Light candles, add comment, explore photo gallery and much more...</p>                       
                        <a className="btn btn-success btn-lg" href="/" role="button">CREATE MEMORIAL</a>
                    </div>
                    </div>
                    <div className="col">
                        <div >
                        <div className={classes.img}>
                            <img src="https://miro.medium.com/max/1600/1*dFx1Ult2o02RUtKMBvsyjQ.png" className={classes.img} alt="profile-card" />
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
