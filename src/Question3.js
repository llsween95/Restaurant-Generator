import React, { Component } from 'react'
import Choice from './Choice'
import { Link } from 'react-router-dom'

class Question3 extends Component {
  render() {
    return (
      <div>
        <h3>Question 3</h3>

        <Link to='/results'>
          <button onClick={() => this.props.onClick()} className="choiceBtn">Get user location</button>
        </Link>
      </div>
    )
  }
}


export default Question3