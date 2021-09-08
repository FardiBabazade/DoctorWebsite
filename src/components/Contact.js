import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <React.Fragment>
            <div className="contact-in container-fluid" style={{ backgroundColor: 'f6f1f9' }}>
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="contact-main-title">Contact</h2>
                    </div>
                </div>
            </div>
            <div className="map container">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115543.98695120394!2d49.77838435694628!3d40.4472406239158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d6bd6211cf9%3A0x343f6b5e7ae56c6b!2zQmFrxLEsIEF6yZlyYmF5Y2Fu!5e0!3m2!1saz!2s!4v1630431101479!5m2!1saz!2s"></iframe>
            </div>
        </React.Fragment>
    )
}


export default Contact;