import React, { Component } from 'react';

import { bubble as Menu } from 'react-burger-menu'

class Sidebar extends Component {
  render(props) {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <div className='sidenav'>
        <Menu {...props}
        >
          <a className="menu-item" href="/">
            Home
      </a>

          <a className="menu-item" href="/">
            Burgers
      </a>

          <a className="menu-item" href="/">
            Pizzas
      </a>

          <a className="menu-item" href="/">
            Desserts
      </a>
        </Menu>
      </div>
    );
  }
}

export default Sidebar