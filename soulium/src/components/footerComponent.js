import React from 'react';
import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles((theme) => ({
    container: {
        padding:"50px 0 50px",
        backgroundColor: "grey",
        
    },
  }));

export default function footerComponent() {
    const classes = styles();  

    return (
        <div className={classes.container}>
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                    <a className="navbar-brand" href="/">
                    <img src="https://www.soulium.com/onlinefriedhof/images/hires/LogoSoulium_com.png" alt="soulium-logo" className="mt-0 img-thumbnail" style={{height:"90px", width:"350px"}} />
                    </a>
                    </div>
                    <div className="col-sm">
                    
                    </div>
                    <div className="col-6">

                    <nav className="navbar navbar-expand-lg navbar-dark">

                        <div className="container-fluid mx-auto w-75">
                                                 
                            {/* Link containers */}
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <div className="mx-auto">
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="/">
                                        <br/>
                                        <strong>HOME</strong>
                                        </a>
                                        </li>
                                        <li className="nav-item">
                                        <a className="nav-link" href="/">
                                        <br />
                                        <strong>PREMIUM</strong>
                                        </a>
                                        </li>
                                        <li className="nav-item">
                                        <a className="nav-link" href="/">
                                        <br/>
                                        <strong>COMEMORATE</strong>
                                        </a>
                                        </li>
                                        <li className="nav-item">
                                        <a className="nav-link" href="/">
                                        <br/>
                                        <strong>GRIEF FORUM</strong>
                                        </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </nav>
                    </div>
                </div>
            </div> 
        </div>
    )
}
