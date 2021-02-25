import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css'
import { Menu } from 'semantic-ui-react'
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    const { path } = this.props

    return (
      <div className='nav'>
        <Menu
          pointing
          secondary
          className='menu'
          fluid widths={5}
          color='blue'
          size='small'
          fixed='top'
        >

          <Menu.Item active={path === '/'}>
            <Link to="/">Home</Link>
          </Menu.Item>

          <Menu.Item active={path === '/about'}>
            <Link to="/about">About Me</Link>
          </Menu.Item>

          <Menu.Item active={path === '/projects'}>
            <Link to="/projects">Projects</Link>
          </Menu.Item>


          <Menu.Item active={path === '/socials'}>
            <Link to="/socials">Socials</Link>
          </Menu.Item>


          <Menu.Item active={path === '/contact'}>
            <Link to='/contact'>Contact</Link>
          </Menu.Item>
         

        </Menu>
      </div>
    );
  }
}

export default Nav;