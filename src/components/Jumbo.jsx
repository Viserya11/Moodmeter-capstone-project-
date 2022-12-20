import React from 'react'
import { Jumbotron, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';

export default function Jumbo() {
  return (
    <>
        <Jumbotron>
        <h1>Mental Well-being App</h1>
         <p>
      This is a simple hero unit, a simple jumbotron-style component for calling
      extra attention to featured content or information.
            </p>
            <p>
                <Link to="/about">
        <Button bsStyle="primary">Learn more</Button></Link>
            </p>
    
        </Jumbotron>
  </>
  )
}


