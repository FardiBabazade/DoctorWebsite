import React, { useState } from 'react';
import './Fagmenu.css';
import fagimage from '../images/question.png';

function Fagmenu() {

    const [stateclass, setstateclass] = useState(1);
    const [statequestionsfirst, setstatequestionsfirst] = useState([
        {
            id: 1,
            question: 'Can i make an Appointment Online with White Plains Hospital Kendi ?',
        },
        {
            id: 2,
            question: 'Does White Plains Hospital Kendi Offer Telehealth  ?',
        },
        {
            id: 3,
            question: 'White Plains Hospital Kendiaccepts insurance ?',
        },
        {
            id: 4,
            question: 'White lorem Doctors Kendiaccepts ins?',
        },
        {
            id: 5,
            question: '  Where is White Plains Hospital Kendisoffice located?',
        }
    ])
    const [statequestionssecond, setstatequestionssecond] = useState([
        {
            id: 1,
            question: 'Can i ipsum an lorem Online check  doctors Hospital?',
        },
        {
            id: 2,
            question: 'What is White Plains Hospital lorem ipsum ile ?',
        },
        {
            id: 3,
            question: 'How can I go lorem ipsum string?',
        },
        {
            id: 4,
            question: 'Where id located tibb clicincs ?',
        },
    ])
    const [statequestionsthird, setstatequestionsthird] = useState([
        {
            id: 1,
            question: 'Can i make an Appointment Online with White Plains Hospital Kendi?',
        },
        {
            id: 2,
            question: 'Does White Plains Hospital Kendi Offer Telehealth ?',
        },
        {
            id: 3,
            question: 'Can I make an appointment online with White Plains Hospital Kendi? ',
        },
        {
            id: 4,
            question: 'White Plains Hospital Kendiaccepts insurance?',
        },
        {
            id: 5,
            question: 'Does White Plains Hospital Kendi Offer Telehealth?',
        },
        {
            id: 6,
            question: 'Did Clone  Ken lorem Telehealth Doctors?',
        },
    ])
    const [statequestionsfourth, setstatequestionsfourth] = useState([
        {
            id: 1,
            question: 'Can i make an Appointment Online with White Plains Hospital Kendi?',
        },
        {
            id: 2,
            question: 'Does White Plains Hospital Kendi Offer Telehealth ?',
        },
        {
            id: 3,
            question: 'Can I make an appointment online with White Plains Hospital Kendi? ',
        },
    ])
    const [statequestionsfifth, setstatequestionsfifth] = useState([
        {
            id: 1,
            question: 'Does White Plains Hospital Kendi Offer Telehealth ?',
        },
        {
            id: 2,
            question: 'Can I make an appointment online with White Plains Hospital Kendi?',
        },
    ])

    const funcactiveclass = (index) => {
        setstateclass(index)
    }
    return (
        <div >
            <div className="fagmenu">
                <center>
                    <h2 className="text-center fagmenu-main">Fag's</h2><br></br>
                    {/* <h3 className="fag-title-quest">?</h3> */}
                    <img className="fag-main-img" src={fagimage} />
                </center>
            </div>
            <div className="fag-questions">
                <div  className="container">
                    <div className="row">
                        <div className="row">
                            <div className="col-md-4 col-sm-12 col-12">
                                <div className="fag-menu">
                                    <ul>
                                        <li  className={stateclass === 1 ? 'active-fag' : ''} onClick={() => { funcactiveclass(1) }}>
                                            Payments
                                        <i className="fa fa-chevron-right"> </i>
                                        </li>
                                        <li className={stateclass === 2 ? 'active-fag' : ''} onClick={() => { funcactiveclass(2) }}>
                                            Booking
                                        <i className="fa fa-chevron-right"> </i>
                                        </li>
                                        <li className={stateclass === 3 ? 'active-fag' : ''} onClick={() => { funcactiveclass(3) }}>
                                            Mattis urna
                                            <i className="fa fa-chevron-right"> </i>
                                        </li>
                                        <li className={stateclass === 4 ? 'active-fag' : ''} onClick={() => { funcactiveclass(4) }}>
                                            Molestie vel
                                            <i className="fa fa-chevron-right"> </i>
                                        </li>
                                        <li className={stateclass === 5 ? 'active-fag' : ''} onClick={() => { funcactiveclass(5) }}>
                                            Eros
                                          <i className="fa fa-chevron-right"> </i>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-8  col-sm-12 col-12">
                                <div className="fag-menu-questions">
                                    {stateclass === 1 ?
                                        <ul >
                                            {statequestionsfirst.map((item) => (
                                                <li key={item.id}>
                                                    <p>{item.question} </p>
                                                </li>
                                            ))}

                                        </ul>
                                        : stateclass === 2 ?
                                            <ul >
                                                {statequestionssecond.map((item) => (
                                                    <li key={item.id}>
                                                        <p>{item.question}</p>
                                                    </li>
                                                ))}
                                            </ul> : stateclass === 3 ?
                                                <ul >
                                                    {statequestionsthird.map((item) => (
                                                        <li key={item.id}>
                                                            <p>{item.question}</p>
                                                        </li>
                                                    ))}
                                                </ul> : stateclass === 4 ?
                                                    <ul >
                                                        {statequestionsfourth.map((item) => (
                                                            <li key={item.id}>
                                                                <p>{item.question}</p>
                                                            </li>
                                                        ))}
                                                    </ul> :
                                                    <ul >
                                                        {statequestionsfifth.map((item) => (
                                                            <li key={item.id}>
                                                                <p>{item.question}</p>
                                                            </li>
                                                        ))}
                                                    </ul>
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}


export default Fagmenu;