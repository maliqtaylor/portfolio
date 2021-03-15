import React from 'react';
import Footer from '../Components/Footer'
import headshot from '../headshot.png'
import { Divider, Icon, Image } from 'semantic-ui-react'
import Card from 'react-bootstrap/Card';

function About() {
  return (
    <div className='about'>
      <div id='page-wrap'>

        <div className='headshot'>
          <Image
            src={headshot}
            size='small'
            verticalAlign='middle'
            circular
          />
        </div>

        <Card className='aboutCard'>

          <Card.Body>
            <Card.Title className='cardTitle'>About Me</Card.Title>
            <Card.Text className='text'>
              Hello and welcome to my portfolio. I'm Maliq Taylor; a full-stack web developer from Brooklyn, New York. My tech journey started in 2019 when I became a Full Stack Web Development Fellow at Pursuit. In 2020 I completed a second bootcamp with General Assembly. Aside from code, reading and writing fiction are passions of mine and I aspire to one day be a published author.
            </Card.Text>
          </Card.Body>

        </Card>

        <Divider horizontal>
          <Icon name='sync' loading />
        </Divider>

        <h5>Skills</h5>

        <Footer left='/' right='/projects' />
      </div>
    </div>
  );
}

export default About;