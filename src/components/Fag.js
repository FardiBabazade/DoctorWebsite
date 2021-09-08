import React from 'react';
import './Fag.css';
import fagimgone from '../images/fagimgone.jpg';
import fagimgtwo from '../images/fagimgtwo.jpg';

function Fag() {
    return (
        <div className="fag">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-12 col-12">
                        <h1 className="fag-main-title">
                            Why Choose <br /> Docfind Clinic?
                         </h1>
                        <h5 className="fag-main-title-h5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. It is a long established fact that a reader will be Lorem ipsum dolor sit amet consectetur.
                         </h5>
                        <div className="row">
                            <div className="col-md-2 col-sm-2 col-2">
                                <i class="fa fa-heartbeat fag-icon-one"></i>
                                <i class="fa fa-users"></i>
                            </div>
                            <div className="col-md-10 col-sm-10 col-10">
                                <h4 className="text-light fag-title-one">Quality Control System</h4>
                                <h5 className="fag-title-two">It is a long established fact that a reader will be distracted by the readable content.</h5>

                                <h4 className="text-light fag-title-one">Highly Professional Staff</h4>
                                <h5 className="fag-title-two">It is a long established fact that a reader will be distracted by the readable content.</h5> 
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 col-12">
                         <img className="fag-img-one" src={fagimgone} />
                         <img className="fag-img-two" src={fagimgtwo} />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Fag;