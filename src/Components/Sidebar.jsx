import React, { Component } from 'react'
import { bubble as Menu } from 'react-burger-menu'

class Sidebar extends Component {

  render() {
    return (
      <div className='sidenav'>
        <Menu disableAutoFocus>
          <a className="menu-item" href="/">
            Home
          </a>

          <a className="menu-item" href="/about">
            About
          </a>

          <a className="menu-item" href="/projects">
            Projects
          </a>

          <a className="menu-item" href="/socials">
            Socials
          </a>

          <a className="menu-item" href="/contact">
            Contact
          </a>
        </Menu>
      </div>
    );
  }
}

export default Sidebar