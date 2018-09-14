import React, { Component } from 'react';
import { Consumer } from '../context';

export default class Movies extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          console.log(value);
          return <h1>Movies</h1>;
        }}
      </Consumer>
    );
  }
}
