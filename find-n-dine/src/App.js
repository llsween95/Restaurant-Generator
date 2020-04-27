import React, { Component } from 'react';
import Header from './Header'
import Survey from './Survey'
import Results from './Results'
import Footer from './Footer'
import { Route, Link, Switch } from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
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
