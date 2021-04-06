import React from 'react'
import Footer from '../Components/Footer'
import ProjectCard from '../Components/ProjectCard'
import Card from 'react-bootstrap/Card'
import { Container } from 'semantic-ui-react'


function Projects() {
  return (
    <Container>
      <div className='projects'>
        <div id='page-wrap'>
          <Card className='projectsCard'>
            <h1>Projects</h1>

            <Card.Body>
              <ProjectCard />
            </Card.Body>
          </Card>


          <Footer left='/about' right='/contact' />
        </div>
      </div>
    </Container>
  );
}

export default Projects;