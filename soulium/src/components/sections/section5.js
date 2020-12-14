import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGem } from '@fortawesome/free-regular-svg-icons';
import PersonCard from '../personCardComponent';
import PersonCard2 from '../personCard2Component';


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
    button: {
        margin: "10px 10px 10px 200px"
    },
    container: {
        width: "80%",
        margin: "100px auto 50px",
        textAlign: "left"
    }
  }));


export default function section5() {
    const classes = styles();  


    return (
        <div id="section5" className=" py-4 w-100">
            <div className={classes.container}>
                <div className="row">
                    <div className="col">
                    <h3><strong>Recent Memorials</strong></h3>
                    </div>
                    <div className="col">
                    <h3><strong>
                    <FontAwesomeIcon color='red' icon={faGem} />
                    <span></span> Premium Memorials
                    </strong></h3>
                    </div>
                    <div className="col">
                    <Button size="large" variant="contained" className={classes.button} color ="secondary"><strong>CREATE PREMIUM MEMORIAL</strong></Button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                    <PersonCard />
                    <PersonCard />
                    <PersonCard />
                    <PersonCard />
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
