import React, { Component } from 'react'


class Results extends Component {
  render() {
    console.log(this.props.results.location)
    return (
      <div className="resultsContainer">
        <h3>{this.props.results.name}</h3>
        <img src={this.props.results.image_url}></img>
        <div className="restaurant-details">
          <p>{this.props.results.price}</p>
          <p>{this.props.results.rating}</p>
        </div>
        <p>{this.props.results.location && this.props.results.location.display_address[0] + ' ' + this.props.results.location.display_address[1]}</p>
      </div>
    )
  }

}


export default Results