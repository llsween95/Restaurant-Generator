import React, { Component } from 'react'

class Choice extends Component {
  render() {
    return (
      <>
        <button className="choiceBtn">{this.props.options}</button>
      </>
    )
  }
}


export default Choice