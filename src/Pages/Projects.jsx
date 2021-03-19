import React from 'react'
import Footer from '../Components/Footer'
import Card from 'react-bootstrap/Card'


function Projects() {
  return (
    <div className='projects'>
      <div id='page-wrap'>

        <Card className='projectCard'>
          <Card.Body>
          <Card.Title className='cardTitle'>Projects</Card.Title>
          </Card.Body>
        </Card>

        <Footer left='/about' right='/socials' />
      </div>
    </div>
  );
}

export default Projects;