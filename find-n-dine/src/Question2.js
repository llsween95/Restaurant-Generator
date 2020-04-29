import React, { Component } from 'react'
import Choice from './Choice'
import { Link } from 'react-router-dom'

class Question2 extends Component {
  render() {



    return (
      <div>
        Question 2
        {this.props && this.props.prices.map((price) => (
          <Link to='/3'>
            <button onClick={() => this.props.onClick(price)} className="choiceBtn">{price}</button>
          </Link>
        ))}

      </div>
    )


    //console.log(this.props.prices)

  }
}


export default Question2