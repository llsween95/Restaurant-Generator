import React, { Component } from 'react'
import { Link, Router } from 'react-router-dom'
import HeaderText from './HeaderText'

class Header extends Component {
  render() {
    return (
      <header style={this.props.style}>
        <Link to="/">
          <h1 onClick={() => this.props.onClick()}>Find-N-Dine</h1>
        </Link>
      </header>
    )
  }

}

export default Header
