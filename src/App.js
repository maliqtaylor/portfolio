import './App.css';
import Nav from './Components/Nav'
import Title from './Components/Title'
import About from './Components/About';
import 'semantic-ui-css/semantic.min.css'
import { Divider } from 'semantic-ui-react'


function App() {
  return (
    <div className="App">
      <Nav/>

      <Divider
      className='divider'
      section= {true}
      hidden= {true}
      />

      <Title /> 

      <Divider
        className='divider'
        section={true}
        hidden={true}
      />

      <About/>
    </div>
  );
}

export default App;
