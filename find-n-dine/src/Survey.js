import React, { Component } from 'react'
import { render } from '@testing-library/react'
import Choice from './Choice'
import { Link, withRouter } from 'react-router-dom'

class Survey extends Component {
  render() {
    return (
      <div className="survey">
        <h3>{this.props.question}</h3>
        <div className="choiceContainer">
          <Choice />
          <Choice />
          <Choice />
          <Choice />
        </div>
        <Link to="/results">
          <button>Show Results</button>
        </Link>
      </div>
    )
  }

}


export default withRouter(Survey)