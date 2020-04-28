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
      businesses: []
    }
  }




  async componentDidMount() {

    const apiCall = await axios({
      baseURL: 'https://api.yelp.com/v3/businesses/',
      headers: {
        Authorization: 'Bearer VH55OzljuVjIfTgkNbrFZSKpqrDzuldnxMc6DooDLTrVhl_swACA-XW_qqzlkblwB2LgJ_hKKpthcNfoH5_UiJ1wMvHEZJNI0CFrk75YBKOaHrWi7DcOr_KcmLikXnYx',
      }
    })
    console.log('hi')

  }


  render() {
    //console.log(process.env.REACT_APP_FAVLIQUOR)
    return (
      <div className="App">
        <Header />

        <main>

          <Switch>
            <Route exact path="/">
              <Survey />
            </Route>

            <Route path="/results">
              <Results />
            </Route>

          </Switch>

        </main>

        <Footer />
      </div>
    )
  }

}

export default App;
