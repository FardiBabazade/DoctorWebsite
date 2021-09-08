import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="footer-contact">
                    <div className="row">
                        <div className="col-md-4 col-sm-12 col-12">
                            <div className="row">
                                <div className="col-md-4 col-sm-4 col-4">
                                    <center>
                                        <i className="fa fa-map-marker footer-contact-icon"></i>
                                    </center>
                                </div>
                                <div className="col-md-8 col-sm-8 col-8">
                                    <div className="footer-contact-right footer-contact-line">
                                        <h3 className="text-muted footer-contact-one">Our Address</h3>
                                        <h3 className="footer-contact-two">Baku</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-12 col-12">
                            <div className="row">
                                <div className="col-md-4 col-sm-4 col-4">
                                    <a href="tel:+994705776751">
                                        <center>
                                            <i className="fa fa-phone footer-contact-icon"></i>
                                        </center>
                                    </a>
                                </div>
                                <div className="col-md-8 col-sm-8 col-8">
                                    <a href="tel:+994705776751">
                                        <div className="footer-contact-right footer-contact-line">
                                            <h3 className="text-muted footer-contact-one">Call Us</h3>
                                            <h3 className="footer-contact-two">0705776751</h3>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-12 col-12">
                            <div className="row">
                                <div className="col-md-4 col-sm-4 col-4">
                                    <center>
                                        <i className="fa fa-envelope footer-contact-icon"></i>
                                    </center>
                                </div>
                                <div className="col-md-8 col-sm-8 col-8">
                                    <div className="footer-contact-right">
                                        <h3 className="text-muted footer-contact-one">Our Mail</h3>
                                        <h3 className="footer-contact-two">fardi.babazade@gmail.com</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-contact-down">
                    <div className="row">
                        <div className="col-md-4 col-sm-6 col-12">
                            <Link to="/home">
                                <h2>Services</h2>
                            </Link>
                            <Link to="/home">
                                <h3 className="text-muted">Therapiya</h3>
                            </Link>
                            <Link to="/home">
                                <h3 className="text-muted">Dentistry</h3>
                            </Link>
                            <Link to="/home">
                                <h3 className="text-muted">Virusology</h3>
                            </Link>
                            <Link to="/home">
                                <h3 className="text-muted">Pharmacology</h3>
                            </Link>
                            <Link to="/home">
                                <h3 className="text-muted">Cardiology</h3>
                            </Link>
                        </div>
                        <div className="col-md-4 col-sm-6 col-12">
                            <h2>Useful Links</h2>
                            <Link to="/home">
                                <a>
                                    <h3 className="text-muted">Home</h3>
                                </a>
                            </Link>
                            <Link to="/about">
                                <a>
                                    <h3 className="text-muted">About</h3>
                                </a>
                            </Link>
                            <Link to="/fagmenu">
                                <a>
                                    <h3 className="text-muted">Fag</h3>
                                </a>
                            </Link>
                            <Link to="/doctors">
                                <a>
                                    <h3 className="text-muted">Doctors</h3>
                                </a>
                            </Link>
                            <Link to="/contact">
                                <a>
                                    <h3 className="text-muted">Contact</h3>
                                </a></Link>

                        </div>
                        <div className="col-md-4 col-sm-12 col-12">
                            <center>
                                <h2 className="footer-contact-down-three-title">Subscribe</h2>
                                <input  type="text" placeholder="Email" className="form-control " />
                                <button  className="footer-contact-button">SUBSCRIBE</button>
                            </center>
                        </div>
                        <div className="col-md-12">
                            <a href="https://www.facebook.com/ferdi.babazade.75">
                                <h3 className="text-muted">© Website 2021 | All Rights Reserved</h3>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;