import React, { useState } from 'react';
import './Navbar.css';
import logonav from '../logos/logonav.png';
import { Link } from 'react-router-dom';



function Navbar() {
    const [color, setcolor] = useState('#fff');

    return (
        <div>
            <div className="nav-one">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-5 col-5">
                            <i className="fa fa-envelope text-light nav-icon"></i>  <h6>fardi.babazade@gmail.com</h6>
                        </div>
                        <div className="col-md-3 col-sm-2 col-2">
                            <i className="fa fa-map-marker text-light nav-icon"></i> <h6>Baku</h6>
                        </div>
                        <div className="col-md-6 col-sm-5 col-5">
                            <ul>
                                <a href="https://www.facebook.com/ferdi.babazade.75">
                                    <i className="fa fa-facebook text-light nav-icon"></i>
                                </a>
                                <a href="https://www.instagram.com/babazade__85/">
                                    <i className="fa fa-instagram  text-light nav-icon"></i>
                                </a>
                                <a href="https://www.linkedin.com/in/fardi-babazadeh-90776b208/">
                                    <i className="fa fa-linkedin text-light nav-icon"></i>
                                </a>
                                <a href="https://github.com/fardi12345">
                                    <i className="fa fa-github text-light nav-icon"></i>
                                </a>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* navbar-expand-lg */}
            <nav className="navbar navbar-expand-lg  navbar-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="">
                        <img src={logonav} alt="Path Error" />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link to="/">
                                    <a className="nav-link" style={{ color }}>Home <span className="sr-only"></span></a>
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/about">
                                    <a className="nav-link" style={{ color }}>About</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/fagmenu">
                                    <a className="nav-link" href="/fag" style={{ color }}>Fag</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/doctors">
                                    <a className="nav-link" href="#" style={{ color }}>Doctors</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact">
                                    <a className="nav-link" href="#" style={{ color }}>Contact Us</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;