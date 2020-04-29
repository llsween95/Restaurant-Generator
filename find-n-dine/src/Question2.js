import React, { Component } from 'react'
import Choice from './Choice'
import { Link } from 'react-router-dom'

class Question2 extends Component {
  render() {
    return (
      <div>
        Question 2
        {this.props.prices.map((cat) => (
          <Link to='/3'>
            <button className="choiceBtn">{cat}</button>
          </Link>
        ))}

      </div>
    )
  }
}


export default Question2