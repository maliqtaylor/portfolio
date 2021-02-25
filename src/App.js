import './App.css';
import Nav from './Components/Nav'
import Title from './Components/Title'
import 'semantic-ui-css/semantic.min.css'
import { Container, Divider } from 'semantic-ui-react'


function App() {
  return (
    <div className="App">
      <Nav/>

      <Divider
      className='divider'
      section= 'true'
      hidden='true'
      />

      <Title /> 
    </div>
  );
}

export default App;
