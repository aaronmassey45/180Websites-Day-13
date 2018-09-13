import React, { Component } from 'react';
import axios from 'axios';

const Context = React.createContext();

export class Provider extends Component {
  state = {
    results: [],
    selectedMovie: {
      title: '',
      tagline: '',
      overview: '',
      poster_path: '',
      backdrop_path: '',
      vote_average: '',
      runtime: '',
      release_date: '',
      revenue: '',
    },
  };

  componentDidMount = () => {};

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
