import React from 'react'
import './IntroHead.css'
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'
import  headImage from './../images/image1.png'

export default function IntroHead() {
    return (
        <div className="main">
            <div className="left">
                <h2 style={{ textDecoration: 'none', color: 'pink' }}>Powering</h2>
                <h2>deeper banking<br />relationships</h2>
                <p>Blend is the cloud banking infrastructure powering billions of dollars in financial transactions everyday.</p>
                <Button variant="outline-success" style={{ backgroundColor: 'white', color: 'darkblue', padding: '10px', marginRight: '10px', border: '1px solid darkblue', width: '200px' }}>See how it works  <FontAwesomeIcon icon={faCirclePlay} /></Button>
                <Button variant="outline-success" style={{ backgroundColor: 'darkblue', color: 'white', padding: '10px', border: '1px solid white', width: '200px' }}>Request a Demo</Button>
            </div>
            <div className="right">
                <img src={headImage} alt="mainImage" />
            </div>
        </div>


    )
}
