import React from 'react';
import Footer from '../Components/Footer'
import { Card, Divider, Icon } from 'semantic-ui-react'

const description = `Idk what to say about myself. I will rewrite this when something important comes to mind. Until then good day `


function About() {
  return (
    <div className='about'>
      <div id='page-wrap'>
        <Divider
          className='divider-a'
          section={true}
          hidden={true}
        />
        <Card centered>
          <Card.Content header='About Me' />
          <Card.Content description={description} />
        </Card>

        <Divider horizontal>
          <Icon name='sync' loading />
        </Divider>

        <Footer left='/' right='/projects' />
      </div>
    </div>
  );
}

export default About;