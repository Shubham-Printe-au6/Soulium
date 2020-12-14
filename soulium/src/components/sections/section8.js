import { makeStyles } from "@material-ui/core/styles";

import PersonCard2 from '../personCard2Component';
import BigPersonCard from '../bigPersonCardComponent'


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
        // color: "white",
        padding:"150px 0 100px 0"
    },
    img: {
        borderRadius: "30px 30px 0 0",
        width: "600px",
        margin: "0 0 0 100px"
    },
    red: {
        color: "#cf7d7d"
    },
    title: {
        fontSize: "22px"
    }
  }));


export default function section8() {

    const classes = styles();  

    return (
        <div id="section8" className={classes.container}>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                    <h3 className={classes.title}><strong><span className={classes.red}>TUESDAY 21.07.2020</span> Starve date today</strong></h3>
                    </div>
                    <div className="col-8"></div>
                </div>
                <div className="row">
                    <div className="col-4">
                    <BigPersonCard />
                    </div>
                    <div className="col-8">
                        <div className="row">
                            <div className="col">
                            <PersonCard2 />
                            </div>
                            <div className="col">
                            <PersonCard2 />
                            </div>
                            <div className="col">
                            <PersonCard2 />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                            <PersonCard2 />
                            </div>
                            <div className="col">
                            <PersonCard2 />
                            </div>
                            <div className="col">
                            <PersonCard2 />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
