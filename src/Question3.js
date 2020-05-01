import React, { Component } from 'react'
import Choice from './Choice'
import { Link } from 'react-router-dom'

class Question3 extends Component {
  render() {
    return (
      <div className="questionContainer3">
        <h3>Share location:</h3>
        <div className="choiceContainer3">
          <Link to='/results'>
            <button onClick={() => this.props.onClick()} className="choiceBtn3">Get user location</button>
          </Link>
        </div>
      </div>
    )
  }
}


export default Question3