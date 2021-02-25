import './App.css';
import Nav from './Components/Nav'
import Title from './Components/Title'
import Sidebar from './Components/Sidebar'
import 'semantic-ui-css/semantic.min.css'
import { Divider } from 'semantic-ui-react'

function App() {
  return (
    <div className="App">
      <Nav />
      <Sidebar pageWrapId={"page-wrap"} outerContainerId={"App"}/>
      <div id='page-wrap'>
        <Divider
          className='divider'
          section={true}
          hidden={true}
        />

        <Title />
      </div>
    </div>
  );
}

export default App;
