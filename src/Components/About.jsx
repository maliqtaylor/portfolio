import React from 'react';
import { Card } from 'semantic-ui-react'

const description = [
  'Amy is a violinist with 2 years experience in the wedding industry.',
  'She enjoys the outdoors and currently resides in upstate New York.',
].join(' ')


function About() {
  return (
    <div className='about'>
      <Card>
        <Card.Content header='About Me' />
        <Card.Content description={description} />
      </Card>
    </div>
  );
}

export default About;