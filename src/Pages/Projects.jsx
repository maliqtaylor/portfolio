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
          <h1>Projects</h1>

          <Card.Body>
            <Card className='project' border='primary'>
              <a
                className='pointer'
                rel='noreferrer'
                target="_blank"
                href="https://tetris-dom-project.surge.sh/"
              >
                <Card.Title className='cardTitle'>Tetris</Card.Title>
              </a>
              <Image
                src={tetris}
                size='huge'
                verticalAlign='middle'
                bordered={true}
              />
              <Card.Body>
                A recreation of Tetris using JavaScript CSS and HTML DOM manipulation.
              </Card.Body>
            </Card>

            <Card className='project' border='primary'>
              <a
                className='pointer'
                rel='noreferrer'
                target="_blank"
                href="https://anime-watchlist.herokuapp.com/"
              >
                <Card.Title className='cardTitle'>
                  Anime Watchlist
              </Card.Title>
              </a>

              <Image
                src={watchlist}
                size='huge'
                verticalAlign='middle'
                bordered={true}
              />
              <Card.Body>
                A full-stack web application designed for users to catalogue their favorite Anime shows and movies.
              </Card.Body>
            </Card>

            <Card className='project' border='primary'>
              <a
                className='pointer'
                rel='noreferrer'
                target="_blank"
                href="https://wryters-flock.herokuapp.com/"
              >
                <Card.Title className='cardTitle'>Wryters Flock</Card.Title>
              </a>

              <Image
                src={flock}
                size='huge'
                verticalAlign='middle'
                bordered={true}
              />
              <Card.Body>
                A full-stack React web application built for writers to post creative writing pieces and get feedback.
              </Card.Body>
            </Card>


          </Card.Body>
        </Card>

        <Footer left='/about' right='/socials' />
      </div>
    </div>
  );
}

export default Projects;