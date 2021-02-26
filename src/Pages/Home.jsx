import { Divider } from 'semantic-ui-react'
import Title from '../Components/Title'
import Footer from '../Components/Footer'

function Home() {
  return (
    <div className='home'>
      <div id='page-wrap'>

        <Divider
          className='divider-h'
          section={true}
          hidden={true}
        />

        <Title />
        <Footer right='/about'/>

      </div>
    </div>
  );
}

export default Home;