import React, { Component } from 'react'
import { Icon, Menu } from 'semantic-ui-react'

class Footer extends Component {
  render() {
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
          <Menu.Item>
            <a rel='noreferrer' target="_blank" href="https://docs.google.com/document/d/1BjNWE51t40FBR1egV85ddwMJoaJhQEGP9WYEeql8sTM/edit?usp=sharing">
              <Icon
                className='pointer'
                name='file alternate outline'
                size='large'
              />
            </a>
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
        </Menu>
      </div>
    );
  }
}

export default Footer;