import React from 'react';
import headshot from '../images/headshot.png'
import { Image } from 'semantic-ui-react'
import Card from 'react-bootstrap/Card'

function AboutCard() {
  return (
    <Card className='aboutCard'>

      <Card.Body>
        <Card.Title className='cardTitle'>About Me</Card.Title>

        <Image
          src={headshot}
          size='small'
          verticalAlign='middle'
          circular
        />

        <Card.Text className='text'>
          Hello and welcome to my portfolio. I'm Maliq Taylor; a full-stack web developer from Brooklyn, New York. My tech journey started in 2019 when I became a <em>Full Stack Web Development</em> fellow at <a rel='noreferrer' target="_blank" href='https://www.pursuit.org/'>Pursuit</a>. In 2020 I continued my engineering education and joined <a rel='noreferrer' target="_blank" href='https://generalassemb.ly/about'>General Assembly</a> as a <em>Software Engineering Immersive</em> student. My time at  Pursuit & General Assembly was spent mastering web technoligies like Javascript, Python, React, HTML, SQL, etc. In addition to improving my technical skills, I was also able to express my creativity through code and work with a wide variety of people. The opportunity to collaborate & learn from others is probably my favorite aspect of being a developer.

          <br />
          <br />

               Beyond technology, my hobbies & interests include.... reading and writing are passions of mine. There's nothing quite like geting lost in a good book and I aspire to one day be a published author.
            </Card.Text>
      </Card.Body>

    </Card>
  );
}

export default AboutCard;