import Title from '../Components/Title'
import Footer from '../Components/Footer'

function Home() {
  return (
    <div className='home'>
      <div id='page-wrap'>

        <Title />
        <Footer right='/about' />

      </div>
    </div>
  )
}

export default Home;