import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="Home">
            <div className="overlay">

            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <center>
                            <div className="homein">
                                <h5 className="text-center text-light">Markets&Resources</h5>
                                <p className="text-center text-light home-p">Find The Best<br /> Doctor Near By You</p>
                                <Link to="/doctors">
                                    <button className="btn-home btn-home-one">Find A Doctor +</button>
                                </Link>
                                <Link to="/about">
                                    <button className="btn-home btn-home-two">Read More +</button>
                                </Link>
                            </div>
                        </center>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;
