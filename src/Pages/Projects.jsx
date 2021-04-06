import React from 'react'
import Footer from '../Components/Footer'
import ProjectCard from '../Components/ProjectCard'
import Card from 'react-bootstrap/Card'

function Projects() {
  return (
      <div className='projects'>
        <div id='page-wrap'>
          <Card className='projectsCard'>

            <h1>Projects</h1>

            <Card.Body>
              <ProjectCard />
            </Card.Body>

          </Card>
        </div>
      </div>
  );
}

export default Projects;