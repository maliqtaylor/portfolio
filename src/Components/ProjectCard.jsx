import React from 'react';
import { Image, Container } from 'semantic-ui-react'
import Card from 'react-bootstrap/Card'
import tetris from '../images/tetris.png'
import watchlist from '../images/watchlist.png'
import flock from '../images/flock.png'

const projects = [
  {
    title: 'Tetris',
    img: tetris,
    github: "https://github.com/maliqtaylor/tetris-with-dom",
    live: "https://tetris-dom-project.surge.sh/",
    desc: 'A recreation of Tetris using JavaScript CSS and HTML DOM manipulation.'
  },
  {
    title: 'Anime Watchlist',
    img: watchlist,
    github: "https://github.com/maliqtaylor/anime-watchlist",
    live: "https://anime-watchlist.herokuapp.com/",
    desc: 'A full-stack web application designed for users to catalogue their favorite Anime shows and movies.'
  },
  {
    title: 'Wryters Flock',
    img: flock,
    github: "https://github.com/maliqtaylor/wryters-flock",
    live: "https://wryters-flock.herokuapp.com/",
    desc: 'A full-stack React web application built for writers to post creative writing pieces and get feedback.'
  }
]


function ProjectCard() {
  return (
    <Container>
      {
        projects.map((proj, i) =>
          <Container>
            <Card className='project' border='primary' key={i}>
              <Card.Title className='cardTitle'>
                {proj.title}
                <br />

                <a
                  className='pointer hub'
                  rel='noreferrer'
                  target="_blank"
                  href={proj.github}
                  style={{ fontSize: 'medium' }}
                >
                  Github
              </a>
                |
              <a
                  className='pointer live'
                  rel='noreferrer'
                  target="_blank"
                  href={proj.live}
                  style={{ fontSize: 'medium' }}
                >
                  Live
              </a>

              </Card.Title>

              <Card.Body>
                <Image
                  src={proj.img}
                  size='huge'
                  verticalAlign='middle'
                  bordered={true}
                />
                <br/>

                {proj.desc}
              </Card.Body>
            </Card>
          </Container>
        )
      }
    </Container>
  );
}

export default ProjectCard;