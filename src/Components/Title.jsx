import React from 'react'
import Typical from 'react-typical'
import { Container } from 'semantic-ui-react'

function Title() {
  return (
    <div className='title'>

      <Container>
        <div className='name'>
          <p>MALIQ TAYLOR</p>
        </div>

        <Typical
          loop={Infinity}
          steps={[
            'Developer 🖥 ', 2000,
            'Writer 📖 ', 2000,
            'Voyager 🚀 ', 2000,
            'New Yorker 🗽', 2000
          ]}
        />
      </Container>

    </div>
  );
}

export default Title;