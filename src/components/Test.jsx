import React from 'react'
import { Container } from 'react-bootstrap'

export default function Test() {
  return (
    <>
    <h2>Take test</h2>
    <Container className='testcontainer'>
    
        <p>Question about something something</p>
        <div className="container d-flex">
        <label>One
         
      <input className='checkmark' type="checkbox" checked="checked"/>
        <span class="checkmark"></span>
      </label>

      <label>Two
      <input className='checkmark' type="checkbox"/>
      <span class="checkmark"></span>
     </label>
        </div>

        <p>Question about something something</p>
        <div className="container d-flex">
        <label>One
         
      <input className='checkmark' type="checkbox" checked="checked"/>
        <span class="checkmark"></span>
      </label>

      <label>Two
      <input className='checkmark' type="checkbox"/>
      <span class="checkmark"></span>
     </label>
        </div>

        <p>Question about something something</p>
        <div className="container d-flex">
        <label>One
         
      <input className='checkmark' type="checkbox" checked="checked"/>
        <span class="checkmark"></span>
      </label>

      <label>Two
      <input className='checkmark' type="checkbox"/>
      <span class="checkmark"></span>
     </label>
        </div>
       
        
    </Container>
    </>
  )
}
