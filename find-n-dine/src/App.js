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
      options: {
        categories: ['American', 'Asian', 'Latin', 'Italian', 'Mediterranean', 'Healthyyyy'],
        prices: ['$', '$$', '$$$', '$$$$'],
        location: ''
      },

      question: 'Find-N-Dine'
    }
  }






  async componentDidMount() {

    const response = await axios({
      baseURL: 'https://corsanywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=restaurants&location=10710',
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
      }
    })

    this.setState({
      businesses: response.data.businesses

    })

  }


  render() {

    return (
      <div className="App">
        <Header />

        <main>


          <Switch>
            <Route exact path="/">
              <Question1 onClick={() => console.log('hi')} categories={this.state.options.categories}
              />
            </Route>

            <Route path="/2">
              <Question2 prices={this.state.options.prices} />
            </Route>


            <Route path="/3">
              <Question3 />
            </Route>

            <Route path="/results">
              <Results
                results={this.state.businesses.map((business, index) => (
                  <>
                    {business.location.display_address}
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
