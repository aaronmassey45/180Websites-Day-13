import React, { Component } from 'react';
import axios from 'axios';

import { Consumer } from '../context';

class Search extends Component {
  state = {
    movieTitle: '',
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  findMovies = (dispatch, e) => {
    e.preventDefault();

    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?language=en-US&page=1&include_adult=false&api_key=${
          process.env.REACT_APP_API_KEY
        }&query=${this.state.movieTitle}`
      )
      .then(({ data }) => {
        const payload =
          data.results.length > 10
            ? data.results.filter((movie, i) => i < 10)
            : data.results;
        dispatch({
          type: 'SEARCH_MOVIES',
          payload,
        });

        this.setState({ movieTitle: '' });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Consumer>
        {({ dispatch }) => {
          return (
            <div className="card card-body mb-4 p-4 bg-dark text-white">
              <h1 className="display-4 text-center">
                <i className="fas fa-film" /> Search For A Movie!
              </h1>
              <p className="lead text-center">
                Powered by{' '}
                <a
                  href="https://www.themoviedb.org/?language=en-US"
                  target="_blank"
                  className="text-gold"
                >
                  tMDB
                </a>
              </p>
              <form onSubmit={this.findMovies.bind(this, dispatch)}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Movie Title..."
                    name="movieTitle"
                    value={this.state.movieTitle}
                    onChange={this.onChange}
                  />
                </div>
                <div
                  className="btn btn-primary btn-lg btn-block mb-5"
                  type="submit"
                >
                  Search Movies
                </div>
              </form>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Search;
