import React, { Component } from 'react'
import Choice from './Choice'
import { Link } from 'react-router-dom'
import QuestionText from './QuestionText'

class Question2 extends Component {
  render() {



    return (
      <div className="questionContainer2">
        <QuestionText label="Select a price range:" />
        <div className="choiceContainer2">
          {this.props && this.props.prices.map((price) => (
            <Link to='/3'>
              <button onClick={() => this.props.onClick(price)} className="choiceBtn2">{price}</button>
            </Link>
          ))}
        </div>

      </div>
    )


    //console.log(this.props.prices)

  }
}


export default Question2