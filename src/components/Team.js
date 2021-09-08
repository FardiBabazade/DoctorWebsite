import React from 'react';
import './Team.css';


function Team() {
    return (
        <div className="team">
            <div className="team-overlay">

            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="team-word-group">
                            <h4 className="text-center">Meet Our Team</h4>
                            <h1 className="text-center">Our Creative Team</h1>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                            <div className="team-card team-card-one">
                                <div className="team-card-image team-card-image-one">
                                </div>
                                <div className="team-card-body">
                                    <h3>Carmen Nelson</h3>
                                    <h4>Dentist</h4>
                                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                                    <span className="text-muted">Hong Kong</span>
                                </div>
                            </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                            <div className="team-card team-card-two">
                                <div className="team-card-image team-card-image-two">
                                </div>
                                <div className="team-card-body">
                                    <h3>Irana Nin</h3>
                                    <h4>Therapyst</h4>
                                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                                    <span className="text-muted">Hong Kong</span>
                                </div>
                            </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                            <div className="team-card team-card-three">
                                <div className="team-card-image team-card-image-three">
                                </div>
                                <div className="team-card-body">
                                    <h3>Alina</h3>
                                    <h4>Virologist</h4>
                                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                                    <span className="text-muted">Hong Kong</span>
                                </div>
                            </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                            <div className="team-card team-card-four">
                                <div className="team-card-image team-card-image-four">
                                </div>
                                <div className="team-card-body">
                                    <h3>Olivia</h3>
                                    <h4>Pharmacologiest</h4>
                                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                                    <span className="text-muted">Hong Kong</span>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Team;