import React, { Component } from 'react'
import Choice from './Choice'
import { Link } from 'react-router-dom'

class Question3 extends Component {
  render() {
    return (
      <div>
        Question 3
        <Link to='/results'>
          <button className="choiceBtn">Get user location</button>
        </Link>
      </div>
    )
  }
}


export default Question3