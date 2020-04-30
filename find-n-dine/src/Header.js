import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import HeaderText from './HeaderText'

class Header extends Component {
  render() {
    return (
      <header>
        <Link to="/">
          <HeaderText onClick={() => this.props.onClick} />
        </Link>
      </header>
    )
  }

}

export default Header
