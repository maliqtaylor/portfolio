import React from 'react'
import Footer from '../Components/Footer'
import Card from 'react-bootstrap/Card'
import { Image } from 'semantic-ui-react'
import tetris from '../images/tetris.png'
import watchlist from '../images/watchlist.png'
import flock from '../images/flock.png'



function Projects() {
  return (
    <div className='projects'>
      <div id='page-wrap'>

        <Card className='projectsCard'>
          <Card.Body>
            <Card className='project' border='primary'>
              <Card.Title className='cardTitle'>Tetris</Card.Title>
              <Image
                src={tetris}
                size='huge'
                verticalAlign='middle'
                bordered={true}
              />
            </Card>

            <Card className='project' border='primary'>
              <Card.Title className='cardTitle'>Anime Watchlist</Card.Title>
              <Image
                src={watchlist}
                size='huge'
                verticalAlign='middle'
                bordered={true}
              />
            </Card>

            <Card className='project' border='primary'>
              <Card.Title className='cardTitle'>Wryters Flock</Card.Title>
              <Image
                src={flock}
                size='huge'
                verticalAlign='middle'
                bordered={true}
              />
            </Card>


          </Card.Body>
        </Card>

        <Footer left='/about' right='/socials' />
      </div>
    </div>
  );
}

export default Projects;