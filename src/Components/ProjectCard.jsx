import React from 'react';
import { Image } from 'semantic-ui-react'
import Card from 'react-bootstrap/Card'
import tetris from '../images/tetris.png'

const projects = [
  {
    title: 'Tetris',
    img: tetris,
    github: "https://github.com/maliqtaylor/tetris-with-dom",
    live: "https://tetris-dom-project.surge.sh/",
    desc: 'A recreation of Tetris using JavaScript CSS and HTML DOM manipulation.'
  },
]


function ProjectCard() {
  return (
    <>
      {
        projects.map((proj, i) =>
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

            <Image
              src={proj.img}
              size='huge'
              verticalAlign='middle'
              bordered={true}
            />

            <Card.Body>
              {proj.desc}
            </Card.Body>
          </Card>
        )
      }
    </>
  );
}

export default ProjectCard;