import React, { useState } from 'react';
import './Doctors.css';
import doctorimagedc from '../images/doctornew.png';


function Doctors() {


    const [statesearchquery, setstatesearchquery] = useState('')
    const [statedoctors, setstatedoctors] = useState([
        {
            id: 1,
            name: 'Saren Don',
            position: 'Dentist',
            imageUrl: 'https://metropolitanhost.com/themes/themeforest/react/docfind/assets/img/doctors-grid/348x350-4.jpg'
        },
        {
            id: 2,
            name: 'Irana Nin',
            position: 'Therapyst',
            imageUrl: 'https://metropolitanhost.com/themes/themeforest/react/docfind/assets/img/doctors-grid/348x350-1.jpg'
        },
        {
            id: 3,
            name: 'Carmen Nelson',
            position: 'Dentist',
            imageUrl: 'https://metropolitanhost.com/themes/themeforest/react/docfind/assets/img/doctors-grid/348x350-5.jpg'
        },
        {
            id: 4,
            name: 'Olivia',
            position: 'Pharmacologiest',
            imageUrl: 'https://metropolitanhost.com/themes/themeforest/react/docfind/assets/img/doctors-grid/348x350-2.jpg'
        },
        {
            id: 5,
            name: 'Alina',
            position: 'Vrologist',
            imageUrl: 'https://metropolitanhost.com/themes/themeforest/react/docfind/assets/img/doctors-grid/348x350-0.jpg'
        },
        {
            id: 6,
            name: 'Janice',
            position: 'Psychologist',
            imageUrl: 'https://metropolitanhost.com/themes/themeforest/react/docfind/assets/img/doctors-grid/348x350-3.jpg'
        },
    ])




    const funcchange = (event) => {
        setstatesearchquery(event.target.value)
    }

    let filteredmovies = statedoctors.filter(
        (item) => {
            return item.name.toLowerCase().includes(statesearchquery.toLocaleLowerCase());

        })



    return (
        <div>
            <div className="doctor">
                <center>
                    <h2 className="text-center doctor-main-title">Doctors</h2><br></br>
                    <img className="doctor-main-image" src={doctorimagedc} />
                </center>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-12">
                        <h2 className="text-center doctors-search-title text-center">Search Doctors</h2>
                    </div>
                    <div className="col-md-12 col-sm-12 col-12">
                        <center>
                            <input 
                                type="text"
                                placeholder='Search doctors name...'
                                className="form-control doctors-input"
                                onChange={funcchange}
                            />
                        </center>
                    </div>

                    {filteredmovies.map(item => (
                        <div className="col-md-4 col-sm-6 col-12">
                            <div className="doctor-card" key={item.id}>
                                <div className="doctor-card-image-one">
                                    <img src={item.imageUrl} />
                                </div>
                                <div className="doctor-card-body">
                                    <h3>{item.name}</h3>
                                    <h4>{item.position}</h4>
                                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                                    <span className="text-muted">Hong Kong</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}


export default Doctors;