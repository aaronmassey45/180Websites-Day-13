import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Provider } from './context';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';

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
              </Switch>
            </div>
          </Fragment>
        </Router>
      </Provider>
    );
  }
}
