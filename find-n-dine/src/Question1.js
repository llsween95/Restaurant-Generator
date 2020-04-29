import React, { Component } from 'react'
import Choice from './Choice'
import { Link, withRouter } from 'react-router-dom'

class Question1 extends Component {
  render() {
    return (
      <div>
        Question 1
        {this.props.categories.map((cat) => (
          <Link to='/2'>
            <button onClick={this.props.onClick} className="choiceBtn">{cat}</button>
          </Link>
        ))}


      </div>
    )
  }
}


export default Question1