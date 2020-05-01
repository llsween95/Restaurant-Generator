import React, { Component } from 'react'
import Choice from './Choice'
import { Link } from 'react-router-dom'
import QuestionText from './QuestionText'


class Question3 extends Component {
  render() {
    return (
      <div className="questionContainer3">
        <QuestionText label="Share your location:" />
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