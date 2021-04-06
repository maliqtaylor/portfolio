import React from 'react'
import { Divider, Icon } from 'semantic-ui-react'
import AboutCard from '../Components/AboutCard'
import Skills from '../Components/Skills'


function About() {
  return (
    <div className='about'>
      <div id='page-wrap'>

        <AboutCard />

        <Divider horizontal>
          <Icon name='sync' loading />
        </Divider>

        <h3>Skills</h3>

        <Skills />
      </div>
    </div>
  );
}

export default About;