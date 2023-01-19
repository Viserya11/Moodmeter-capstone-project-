import React from 'react'
import { Jumbotron, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';


export default function Jumbo() {
  return (
    <>
        <Jumbotron>
        
        <div className='jumboflex'>
          <div className='jumbotext'><h1>MoodMeter</h1>  
         <p className='justify'>
      An application to monitor your current mood and get your Big 5 test results the same time.
            </p>
            
            <Link to="/about">
        <Button className='learnmore'>Learn more</Button></Link>
            </div>
            <p><img className='logo' src="https://raw.githubusercontent.com/Viserya11/capstone-project/master/src/psychiatry.png" alt="logo" /></p>
            </div>
            
           
           
        </Jumbotron>
  </>
  )
}


