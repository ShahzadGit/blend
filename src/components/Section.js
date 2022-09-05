import React from 'react'
import './section.css'
import Button from 'react-bootstrap/Button';

export default function Section() {
    return (
        <div className="secMain">
            <div className="secLeft">

                <h2>Enabling financial services frims to process an average of more than $5 billions in transactions per day</h2>
                <p>Delivering superior customer experiences while maximizing operational efficiency.</p>

            </div>
            <div className="secRight">
                <p>We use diffenret types of cookies to optimize your experiences on our website. Remember that disabling cookies may affect your experience on the website. You can learn more about how we use cookies by visiting our privacy policy<a href="#">Learn more</a></p>
                <Button variant="primary" style={{ backgroundColor: 'darkblue', color: 'white', padding: '10px', width: '100%' }}>Allow cookies</Button>
                <Button variant="primary" style={{ backgroundColor: 'white', color: 'darkblue', padding: '10px', width: '100%' }}>Decline</Button>
            </div>
        </div>


    )
}
