import React, { Component } from 'react'
import Choice from './Choice'
import { Link } from 'react-router-dom'

class Question3 extends Component {
  render() {
    return (
      <div className="questionContainer2">
        <h3>Share location:</h3>
        <div className="choiceContainer2">
          <Link to='/results'>
            <button onClick={() => this.props.onClick()} className="choiceBtn">Get user location</button>
          </Link>
        </div>
      </div>
    )
  }
}


export default Question3