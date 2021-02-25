import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css'
import { Menu } from 'semantic-ui-react'
// import { Link } from "react-router-dom";

class Nav extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })



  render() {
    const { activeItem } = this.state

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

          <Menu.Item
            link
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          />

          <Menu.Item
            link
            name='about me'
            active={activeItem === 'about me'}
            onClick={this.handleItemClick}
          />



          <Menu.Item
            name='projects'
            active={activeItem === 'projects'}
            onClick={this.handleItemClick}
          />

          <Menu.Item
            name='socials'
            active={activeItem === 'socials'}
            onClick={this.handleItemClick}
          />

          <Menu.Item
            name='contact'
            active={activeItem === 'contact'}
            onClick={this.handleItemClick}
          />
        </Menu>
      </div>
    );
  }
}

export default Nav;