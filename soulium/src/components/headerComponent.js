import React from 'react';

// meterial-ui imports

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGem, faUser} from '@fortawesome/free-regular-svg-icons';
import {faSearch} from '../../node_modules/@fortawesome/free-solid-svg-icons'



export default function headerComponent() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">

                <div className="container-fluid mx-auto w-75">
                
                    {/* Logo container with toggler button */}

                    <a className="navbar-brand" href="/">
                    <img src="https://www.soulium.com/onlinefriedhof/images/hires/LogoSoulium_com.png" alt="soulium-logo" className="mt-0 img-thumbnail" style={{height:"90px", width:"350px"}} />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    
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
                                <FontAwesomeIcon color='red' icon={faGem} />
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
                                <li className="nav-item">
                                <a className="nav-link" href="/">
                                <br/>
                                <strong>ABOUT</strong>
                                </a>
                                </li>
                            </ul>
                        </div>

                        {/* form container */}
                        <div className="w-25 mr-0">
                            <ul className="navbar-nav">
                                    <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="/">
                                    <FontAwesomeIcon color='' icon={faSearch} />
                                    <br/>
                                    <strong>search</strong>
                                    </a>
                                    </li>
                                    <li className="nav-item">
                                    <a className="nav-link" href="/">
                                    <FontAwesomeIcon color='' icon={faUser} />
                                    <br />
                                    <strong>login</strong>
                                    </a>
                                    </li>
                                </ul>                        
                            </div>

                    </div>
                </div>
            </nav>            
        </div>
    )
}
