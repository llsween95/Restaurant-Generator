import React, { Component } from 'react'
import Choice from './Choice'
import { Link } from 'react-router-dom'

class Question2 extends Component {
  render() {
    return (
      <div>
        Question 2
        <Link to="/3">
          <Choice />
        </Link>
      </div>
    )
  }
}


export default Question2