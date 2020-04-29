import React, { Component } from 'react';
import Header from './Header'
import Survey from './Survey'
import Question1 from './Question1'
import Question2 from './Question2'
import Question3 from './Question3'
import Choice from './Choice'
import Results from './Results'
import Footer from './Footer'
import { Route, Link, Switch } from 'react-router-dom'
import axios from 'axios'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      businesses: [],
      categories: ['American', 'Asian', 'Latin', 'Italian', 'Mediterranean', 'Healthyyyy'],
      prices: ['$', '$$', '$$$', '$$$$'],
      latitude: 0,
      longitude: 0,
      question: 'Find-N-Dine'
    }

  }




  handleClick1 = (category) => {
    console.log('Category', category)

    this.setState({

      categories: [category]

    })
  }


  handleClick2 = (price) => {

    this.setState({

      prices: [price.length]

    })
  }



  toHomePage = () => {
    this.setState({
      categories: ['American', 'Asian', 'Latin', 'Italian', 'Mediterranean', 'Healthyyyy'],
      prices: ['$', '$$', '$$$', '$$$$']
    })
  }

  getUserLocation = () => {
    if ('geolocation' in navigator) {
      console.log('available.')
      navigator.geolocation.getCurrentPosition((position) => {
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
        console.log('Position is:', position)
        const response = axios({
          baseURL: `https://corsanywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${this.state.categories}&price=${this.state.prices}&latitude=${position.coords.latitude}&longitude=${position.coords.longitude}`,
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
          }
        }).then(response => {
          this.setState({
            businesses: response.data.businesses,
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          });

        })


      })
    } else {
      console.log('not available.')
    }
  }


  generateRestaurant = () => {
    console.log('Biznesses', this.state.businesses)

  }






  render() {

    return (
      <div className="App">
        <Header onClick={this.toHomePage} />

        <main>


          <Switch>
            <Route exact path="/">
              <Question1 onClick={this.handleClick1} categories={this.state.categories}
              />
            </Route>

            <Route path="/2">
              <Question2 onClick={this.handleClick2} prices={this.state.prices} />
            </Route>


            <Route path="/3">
              <Question3 onClick={this.getUserLocation} />
            </Route>

            <Route path="/results">
              <Results
                results={this.state.businesses.map((business, index) => (
                  <>
                    {business.name}
                  </>
                ))}
              />
            </Route>

          </Switch>

        </main>

        <Footer />
      </div>
    )
  }

}

export default App;
