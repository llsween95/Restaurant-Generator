import React, { Component } from 'react'
import Choice from './Choice'
import { Link, withRouter } from 'react-router-dom'
import Button from './Button'
import QuestionText from './QuestionText'

class Question1 extends Component {
  render() {
    return (
      <div className="questionContainer">
        <QuestionText label="Choose category:" />

        <div className="choicesContainer">
          {this.props.categories.map((cat) => (
            <Link to='/2'>
              <button onClick={() => this.props.onClick(cat)} className="choiceBtn">{cat}</button>
            </Link>
          ))}
        </div>

      </div>
    )
  }
}


export default Question1