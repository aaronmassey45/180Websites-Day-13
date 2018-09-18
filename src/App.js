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
    console.log(process.env);
    return (
      <Provider>
        <Router basename={process.env.PUBLIC_URL}>
          <Fragment>
            <Navbar />
            <main className="container">
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/movies/:id" component={MovieInfo} />
              </Switch>
            </main>
            <Footer />
          </Fragment>
        </Router>
      </Provider>
    );
  }
}
