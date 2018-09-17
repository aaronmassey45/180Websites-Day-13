import React, { Fragment } from 'react';
import { Consumer } from '../context';
import Spinner from './spinner/Spinner';
import Movie from './Movie';

const HomePage = () => {
  return (
    <Consumer>
      {({ results, selectedMovie, heading }) => {
        if (results.length === 0) {
          return <Spinner />;
        } else {
          return (
            <Fragment>
              <h3 className="text-center mb-4">{heading}</h3>
              <div className="row">
                {results.map(item => (
                  <Movie movie={item} key={item.id} />
                ))}
              </div>
            </Fragment>
          );
        }
      }}
    </Consumer>
  );
};

export default HomePage;
