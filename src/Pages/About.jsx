import React from 'react';
import Footer from '../Components/Footer'
import headshot from '../headshot.png'
import { Divider, Icon, Image } from 'semantic-ui-react'
import Card from 'react-bootstrap/Card'
import Carousel from 'react-bootstrap/Carousel'
// import { Link } from 'react-router-dom';

function About() {
  return (
    <div className='about'>
      <div id='page-wrap'>

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

               Beyond technology, reading and writing are passions of mine. There's nothing quite like geting lost in a good book and I aspire to one day be a published author.
            </Card.Text>
          </Card.Body>

        </Card>

        <Divider horizontal>
          <Icon name='sync' loading />
        </Divider>

        <h3>Skills</h3>

        <div className='carousel'>
          <Carousel fade indicators={false} controls={false} interval={2900}>

            <Carousel.Item>
              <Image
                src='https://cdn.icon-icons.com/icons2/2108/PNG/512/javascript_icon_130900.png'
                size='tiny'
                verticalAlign='middle'
              />
            </Carousel.Item>

            <Carousel.Item>
              <Image
                src='https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/267_Python_logo-512.png'
                size='tiny'
                verticalAlign='middle'
                circular
              />
            </Carousel.Item>

            <Carousel.Item>
              <Image
                src='https://cdn.auth0.com/blog/react-js/react.png'
                size='tiny'
                verticalAlign='middle'

              />
            </Carousel.Item>

          </Carousel>
        </div>

        <Footer left='/' right='/projects' />
      </div>
    </div>
  );
}

export default About;