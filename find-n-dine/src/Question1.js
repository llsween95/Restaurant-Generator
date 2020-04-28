import React, { Component } from 'react'
import Choice from './Choice'
import { Link, withRouter } from 'react-router-dom'

class Question1 extends Component {
  render() {
    return (
      <div>
        Question 1
        <Link to='/2'>
          <Choice />
        </Link>
        <p>{this.props.choices}</p>
      </div>
    )
  }
}


export default Question1