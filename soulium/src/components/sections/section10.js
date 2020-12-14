import React from 'react';
import Grid from '../chatGridComponent';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { makeStyles } from "@material-ui/core/styles";
import {faComments} from '@fortawesome/free-regular-svg-icons'

const styles = makeStyles((theme) => ({
    container: {
        padding:"100px 0 50px"
    },
    title: {
        margin: "0 0 50px 0",
        fontSize: "25px"
    },
    chat: {
      height: "100px",
      width: "100px"
    }
  }));


export default function section10() {
    const classes = styles();  

    return (
        <div id="section10" className={classes.container}>
            <div>
                <FontAwesomeIcon size="5x" color='green' icon={faComments} />
                <h3 className={classes.title}><strong>Trending Discussions</strong></h3>
            </div>

            <div id="carousel2" className="carousel slide " data-bs-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-bs-target="#carousel2" data-bs-slide-to="0" className="active"></li>
                    <li data-bs-target="#carousel2" data-bs-slide-to="1"></li>
                    <li data-bs-target="#carousel2" data-bs-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">

                <div className="carousel-item active">
                <Grid />
                </div>
                <div className="carousel-item">
                <Grid />
                </div>
                <div className="carousel-item">
                <Grid />
                </div>
                </div>
                <a className="carousel-control-prev" href="#carousel2" role="button" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carousel2" role="button" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </a>
            </div>        
            
        </div>
    )
}
