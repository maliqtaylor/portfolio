import './App.css';
import Nav from './Components/Nav'
import Typical from 'react-typical'
import 'semantic-ui-css/semantic.min.css'


function App() {
  return (
    <div className="App">
      <Nav/>
      <h1>Maliq Taylor</h1>
      <Typical
        loop={Infinity}
        steps={[
          'Developer 🖥 ', 2000,
          'Writer 📖 ', 2000,
          'Voyager 🚀 ', 2000,
          'New Yorker 🗽', 2000
        ]}
      />

    </div>
  );
}

export default App;
