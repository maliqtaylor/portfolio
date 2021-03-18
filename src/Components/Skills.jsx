import React from 'react';
import { Image } from 'semantic-ui-react'
import Carousel from 'react-bootstrap/Carousel'
import js from '../images/js.png'
import python from '../images/python.png'
import node from '../images/node.png'
import react from '../images/react.png'
import django from '../images/django.png'
import css from '../images/css.png'
import html from '../images/html.png'
import postgres from '../images/postgres.png'

let skillData = [
  { icon: js, name: 'Javascript' },
  { icon: python, name: 'Python' },
  { icon: node, name: 'Node.js' },
  { icon: react, name: 'React' },
  { icon: django, name: 'Django' },
  { icon: css, name: 'Css' },
  { icon: html, name: 'Html' },
  { icon: postgres, name:'PostgreSQL' }
]

function Skills() {
  return (
    <div className='skills'>
      < Carousel
        fade
        indicators={false}
        controls={false}
        interval={2900}
      >

        { skillData.map( (skill, i) => 
          <Carousel.Item key={i}>
            <Image
              src={skill.icon}
              size='tiny'
              verticalAlign='middle'
            />

            <p className='skillName'>{skill.name}</p>
          </Carousel.Item>
        )}

      </Carousel>
    </div>
  );
}

export default Skills;