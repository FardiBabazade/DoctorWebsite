import React from 'react';
import './About.css';
import aboutimg from '../images/information.png';

function About() {
    return (
        <div>
            <div className="about">
                <center>
                    <h2 className="text-centr about-main">About Us</h2><br></br>
                    <img className="about-main-img" src={aboutimg} />
                </center>
            </div>
        </div>
    )
}

export default About;
