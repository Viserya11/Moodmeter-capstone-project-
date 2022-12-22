import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Test() {
  return (
    <>
    <h2>Take test</h2>
    <Container className='testcontainer'>
    
        <p>Question about something something</p>
        <div className="container d-flex">
        <label>Agree
         
      <input className='checkmark' type="checkbox" checked="checked"/>
        <span class="checkmark"></span>
      </label>

      <label>Disagree
      <input className='checkmark' type="checkbox"/>
      <span class="checkmark"></span>
     </label>
        </div>

        <p>Question about something something</p>
        <div className="container d-flex">
        <label>Agree
         
      <input className='checkmark' type="checkbox" checked="checked"/>
        <span class="checkmark"></span>
      </label>

      <label>Disagree
      <input className='checkmark' type="checkbox"/>
      <span class="checkmark"></span>
     </label>
        </div>

        <p>Question about something something</p>
        <div className="container d-flex">
        <label>Agree
         
      <input className='checkmark' type="checkbox" checked="checked"/>
        <span class="checkmark"></span>
      </label>

      <label>Disagree
      <input className='checkmark' type="checkbox"/>
      <span class="checkmark"></span>
     </label>
        </div>

       
        
    </Container>
    
    <Link to="/profile"><Button className='submitbtn'>Submit</Button></Link>
    
    </>
  )
}
