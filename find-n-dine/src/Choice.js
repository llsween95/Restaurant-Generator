import React, { Component } from 'react'

class Choice extends Component {

  render() {
    return (
      <>
        <button className="choiceBtn">{this.props.choices}</button>
      </>
    )
  }
}


export default Choice