import React from 'react'
import { Jumbotron, Button } from "react-bootstrap";

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
        <Button bsStyle="primary">Learn more</Button>
            </p>
    
        </Jumbotron>
  </>
  )
}

