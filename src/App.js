import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Provider } from './context';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import MovieInfo from './components/MovieInfo';
import Footer from './components/Footer';

import './App.css';

export default class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <Fragment>
            <Navbar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/movies/:id" component={MovieInfo} />
              </Switch>
            </div>
            <Footer />
          </Fragment>
        </Router>
      </Provider>
    );
  }
}
