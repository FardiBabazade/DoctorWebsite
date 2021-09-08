import React from 'react';
import './Service.css';
import pharmacy from '../logos/pharmacy.png';
import appointment from '../logos/appointment.png';
import doctor from '../logos/doctor.png';

function Service() {
    return (
        <div className="container">
            <h4 className="text-center services-title">What We do</h4>
            <h1 className="text-center services-title-two">Our Services</h1>
            <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                    <div className="card-service mt-5">
                        <center>
                            <div className="card-image-service-one card-image-service">

                            </div>
                            <div className="card-service-body">
                                <h4 className="card-service-body-title">Therapiya</h4>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit
                             </p>
                                <h4 className="card-service-body-footer">Read More... <i className="fa fa-arrow-right"></i> </h4>
                            </div>
                        </center>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                    <center>
                        <div className="card-service mt-5">
                            <div className="card-image-service-two card-image-service">

                            </div>
                            <div className="card-service-body">
                                <h4 className="card-service-body-title">Dentistry</h4>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit
                             </p>
                                <h4 className="card-service-body-footer">Read More... <i className="fa fa-arrow-right"></i> </h4>
                            </div>
                        </div>
                    </center>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                    <center>
                        <div className="card-service mt-5">
                            <div className="card-image-service-three card-image-service">

                            </div>
                            <div className="card-service-body">
                                <h4 className="card-service-body-title">Virusology</h4>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit
                             </p>
                                <h4 className="card-service-body-footer">Read More... <i className="fa fa-arrow-right"></i> </h4>
                            </div>
                        </div>
                    </center>
                </div>

                <div className="col-md-12">
                    <h4 className="text-center services-title-three">Work Process</h4>
                    <h1 className="text-center services-title-four">How It Works</h1>
                </div>



                <div className="col-lg-4 col-md-6 col-sm-12 col-12 mt-5">
                    <div className="how-services">
                        <div className="row">
                                <div className="col-md-4 col-sm-4 col-4">
                                   <center>
                                    <img src={pharmacy} />
                                    </center> 
                                </div>
                                <div className="col-md-8 col-sm-8 col-8">
                                    <h3>Search Best Online Professional</h3>
                                    <h4 className="text-muted">It is a long established fact that a reader will be distracted by the readable</h4>
                                    <h4 className="services-text-footer">Step 1</h4>
                                </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 col-12 mt-5">
                    <div className="how-services">
                        <div className="row">
                            <div className="col-md-4 col-sm-4 col-4">
                                <center>
                                    <img src={appointment} />
                                </center>
                            </div>
                            <div className="col-md-8 col-sm-8 col-8">
                                <h3>Get Instant Appointment</h3>
                                <h4 className="text-muted">It is a long established fact that a reader will be distracted by the readable</h4>
                                <h4 className="services-text-footer">Step 2</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 col-12 mt-5">
                    <div className="how-services">
                        <div className="row">
                            <div className="col-md-4 col-sm-4 col-4">
                                <center>
                                    <img src={doctor} />
                                    </center>
                            </div>
                            <div className="col-md-8 col-sm-8 col-8">
                                <h3>Leave Your Feedback</h3>
                                <h4 className="text-muted">It is a long established fact that a reader will be distracted by the readable</h4>
                                <h4 className="services-text-footer">Step 3</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Service;