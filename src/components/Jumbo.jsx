import React from 'react'
import { Jumbotron, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';

export default function Jumbo() {
  return (
    <>
        <Jumbotron>
        <h1>MoodMeter</h1>  
        <div className='jumboflex'>
         <p >
      An application to monitor your current mood and get your Big 5 test results the same time.
            </p>
            <p><img src="src/psychiatry.png" alt="logo" /></p>
            </div>
            <p>
                <Link to="/about">
        <Button bsStyle="primary">Learn more</Button></Link>
            </p>
    
        </Jumbotron>
  </>
  )
}


