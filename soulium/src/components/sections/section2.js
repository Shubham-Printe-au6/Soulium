import React from 'react';
import Grid from '../personGridComponent';
import Button from '@material-ui/core/Button';


export default function section2() {
    return (
        <div id="section2" className="py-5">

        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <ol className="carousel-indicators">
                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
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
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </a>
        </div>

        <Button className="my-5" size="large" variant="contained" color="secondary"><strong>CREATE MEMORIAL</strong></Button>
        </div>
    )
}
