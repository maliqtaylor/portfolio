import React, { Component } from 'react';
import { Icon, Menu } from 'semantic-ui-react'


class Footer extends Component {
  render() {
    const{right,left} = this.props

    return (
      <Menu
        icon
        borderless
        secondary
        fixed='bottom'
        fluid widths={2}
      >
        
        <Menu.Item disabled className={left? left: 'hide'}>
          <Icon name='angle left' size='large'/>
        </Menu.Item>

        <Menu.Item className={right? right: 'hide'}>
          <Icon name='angle right' size='large'/>
        </Menu.Item>

      </Menu>
    );
  }
}

export default Footer;