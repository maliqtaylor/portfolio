import React, { Component } from 'react'
import { Icon, Menu } from 'semantic-ui-react'
import { Link } from "react-router-dom"


class Footer extends Component {
  render() {
    const { right, left } = this.props

    return (
      <div className='footer'>
        <Menu
          icon
          borderless
          secondary
          fixed='bottom'
          fluid widths={6}
          className='footer'
        >
          <Menu.Item disabled={left === undefined}>
            <Link
              to={left ? left : '/'}
              className='pointer'
              style={left ? {} : { pointerEvents: 'none' }}
            >
              <Icon
                className='pointer'
                name='angle left'
                size={left ? 'large' : 'small'}
                disabled={left === undefined}
              />
            </Link>
          </Menu.Item>

          <Menu.Item>
            <Icon
              className='pointer'
              name='file alternate outline'
              size='large'
            />
          </Menu.Item>

          <Menu.Item>
            <a rel='noreferrer' target="_blank" href='https://github.com/maliqtaylor'>
              <Icon
                className='pointer'
                name='github'
                size='large'
              />
            </a>
          </Menu.Item>

          <Menu.Item>
            <a rel='noreferrer' target="_blank" href='https://www.linkedin.com/in/maliqtaylor/'>
              <Icon
                className='pointer'
                name='linkedin'
                size='large'
              />
            </a>
          </Menu.Item>

          <Menu.Item>
            <a href="mailto:maliq.taylor@icloud.com?subject=Let's connect !&amp;body=Hello Maliq,">
              <Icon
                className='pointer'
                name='envelope open outline'
                size='large'
              />
            </a>
          </Menu.Item>

          <Menu.Item disabled={left === undefined}>
            <Link
              to={right ? right : '/'}
              className='pointer'
              style={right ? {} : { pointerEvents: 'none' }}
            >
              <Icon
                className='pointer'
                name='angle right'
                size={right ? 'large' : 'small'}
                disabled={right === undefined}
              />
            </Link>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default Footer;