import React from 'react';
import './Category.css';
import { Link } from 'react-router-dom';



function Category() {
    return (
        <div className="card-category">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                        <div className="card">
                                <div className="card-up">
                                    <center>
                                        <i class="fa fa-stethoscope" aria-hidden="true"></i>
                                    </center>
                                </div>
                            <h2>Therapiya</h2>
                            <h3>Lorem ipsum dolor sit up lorem opsimlorem ipsum dolor sit up</h3>
                            <Link to="/home">
                                <h5 >Read More...</h5>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                        <div className="card">
                            <div className="card-up">
                                <center>
                                    <i className="fa fa-user-md"></i>
                                </center>
                            </div>
                            <h2>Dentistry</h2>
                            <h3>Lorem ipsum dolor sit up lorem opsimlorem ipsum dolor sit up</h3>
                            <Link to="/home">
                                <h5>Read More...</h5>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                        <div className="card">
                            <div className="card-up">
                                <center>
                                    <i class="fa fa-heartbeat"></i>
                                </center>
                            </div>
                            <h2>Virusology</h2>
                            <h3>Lorem ipsum dolor sit up lorem opsimlorem ipsum dolor sit up</h3>
                            <Link>
                                <h5>Read More...</h5>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                        <div className="card">
                            <div className="card-up">
                                <center>
                                    <i class="fa fa-medkit" aria-hidden="true"></i>
                                </center>
                            </div>
                            <h2>Pharmocology</h2>
                            <h3>Lorem ipsum dolor sit up lorem opsimlorem ipsum dolor sit up</h3>
                            <Link>
                                <h5>Read More...</h5>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}


export default Category;