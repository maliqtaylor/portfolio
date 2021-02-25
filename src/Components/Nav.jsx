import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css'
import { Menu, Segment } from 'semantic-ui-react'



class Nav extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })



  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu 
        pointing 
        secondary
        color='pink'
        compact='true'
        size='small'
        >
          
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
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