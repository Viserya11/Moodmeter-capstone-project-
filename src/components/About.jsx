import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <><div>About</div>
   <Link to="/test"><Button>Take test</Button></Link> 
    </>
  )
}
