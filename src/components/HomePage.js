import React, { Fragment } from 'react';
import { Consumer } from '../context';

const HomePage = () => {
  return (
    <Consumer>
      {value => {
        console.log(value);
        return <h1>Movies</h1>;
      }}
    </Consumer>
  );
};

export default HomePage;
