import React, { Component } from 'react'
import Choice from './Choice'
import { Link, withRouter } from 'react-router-dom'

class Question1 extends Component {
  render() {
    return (
      <div className="questionContainer">
        <h3>Choose your food category:</h3>

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