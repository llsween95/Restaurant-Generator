import React, { Component } from 'react'

class HeaderText extends Component {
  render() {
    return (
      <div>
        <h1 onClick={() => this.props.onClick()}>Find-N-Dine</h1>
      </div >
    )
  }
}


export default HeaderText