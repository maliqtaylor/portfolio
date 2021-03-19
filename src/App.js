import React, { Component } from 'react'
import Nav from './Components/Nav'
import Sidebar from './Components/Sidebar'
import Home from './Pages/Home'
import About from './Pages/About'
import Projects from './Pages/Projects'
import { Route } from "react-router-dom"
import 'semantic-ui-css/semantic.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav 
          path= {this.props.history.location.pathname}
        />

        <Sidebar
          pageWrapId={"page-wrap"}
          outerContainerId={"App"}
        />

        <Route
          exact
          path="/"
          render={({ history }) => (
            <Home history={history} />
          )}
        />

        <Route
          exact
          path="/about"
          render={({ history }) => (
            <About history={history} />
          )}
        />

        <Route
          exact
          path="/projects"
          render={({ history }) => (
            <Projects history={history} />
          )}
        />

      </div>
    );
  }
}

export default App;