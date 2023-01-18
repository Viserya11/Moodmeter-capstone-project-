import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <>
    <h2>About</h2>
    <div className='aboutcontainer'>
      <div className='d-flex'><span><img src="" alt="" /></span><span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia distinctio optio cumque rerum praesentium voluptas. Ullam hic sequi, cum assumenda tempore numquam tenetur ab, nisi commodi dolorem incidunt! Quidem, eligendi!</span></div>
    </div>
   <Link to="/test"><Button>Take test</Button></Link> 
    </>
  )
}
