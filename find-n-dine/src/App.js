import React, { Component } from 'react';
import Header from './Header'
import Survey from './Survey'
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
      options: [
        { categories: ['American', 'Asian', 'Latin'] },
        { food: [] },
        { countries: [] },
        { prices: [] },
        { location: '' }
      ],
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



    // Businesses
    let biz = this.state.businesses

    let bizCity = biz[0].location.city
    let bizAddress = biz[0].location.display_address[0] + ' ' + biz[0].location.display_address[1]
    let bizCoords = biz[0].coordinates
    let bizPhone = biz[0].display_phone
    let priceAndRating = biz[0].price + ' ' + biz[0].rating
    let imgUrl = biz[0].image_url
    console.log(imgUrl)
    //console.log()

  }


  render() {

    return (
      <div className="App">
        <Header />

        <main>


          <Switch>
            <Route exact path="/">
              <Survey question={this.state.question} />
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
