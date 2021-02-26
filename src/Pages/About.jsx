import React from 'react';
import Footer from '../Components/Footer'
import { Card, Divider, Icon} from 'semantic-ui-react'

const description = [
  'Amy is a violinist with 2 years experience in the wedding industry.',
  'She enjoys the outdoors and currently resides in upstate New York.',
].join(' ')


function About() {
  return (
    <div className='about'>
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
        <Icon name='sync'/>
      </Divider>

      <Footer left='/' right='/projects' />
    </div>
  );
}

export default About;