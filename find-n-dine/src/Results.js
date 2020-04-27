import React, { Component } from 'react'

class Results extends Component {
  render() {
    return (
      <div className="resultsContainer">
        <h3>Restaurant Name</h3>
        <img src="https://s3-media0.fl.yelpcdn.com/bphoto/CuPzELhjoygfXg85KF1Ljw/l.jpg"></img>
        <div className="restaurant-details">
          <p>$$</p>
          <p>***</p>
        </div>
        <p>668 Tuckahoe Rd. Yonkers, NY 10710</p>
      </div>
    )
  }

}


export default Results