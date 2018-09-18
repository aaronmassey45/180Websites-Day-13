import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

import Spinner from './spinner/Spinner';

export default class MovieInfo extends Component {
  state = {
    movie: {},
  };

  componentDidMount() {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${
          this.props.match.params.id
        }?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      )
      .then(res => {
        this.setState({ movie: res.data });
      })
      .catch(err => console.log(err));
  }

  componentWillUnmount() {
    document.body.style.backgroundImage = null;
    document.body.style.backgroundColor = 'white';
  }

  arrayToString = array => {
    return array.map(item => item.name).join(', ');
  };

  renderMovieDetails = movie => {};

  render() {
    const { movie } = this.state;
    if (movie === undefined || Object.keys(movie).length === 0) {
      return <Spinner />;
    }

    const IMG = 'https://image.tmdb.org/t/p/w500/';
    document.body.style.backgroundImage = `url(${IMG}${movie.backdrop_path})`;
    document.body.style.backgroundColor = 'black';

    return (
      <div className="card movie-details bg-dark text-white mb-4">
        <div className="card-header">
          <Link to="/" className="btn btn-secondary btn-sm">
            Go Back
          </Link>
        </div>
        <div className="card-body row ">
          <div className="col-md-4 order-md-1 order-12">
            <img
              src={`${IMG}${movie.poster_path}`}
              alt="Movie poster"
              className="img-fluid"
            />
          </div>
          <div className="card-text col-md order-md-12 order-1">
            <h1>{movie.title.toUpperCase()}</h1>
            <h4 className="text-gold">{movie.tagline}</h4>
            <div className="mb-4">{movie.overview}</div>

            <h5 className="text-gold">{this.arrayToString(movie.genres)}</h5>
            <h6 className="mb-4">
              {this.arrayToString(movie.production_companies)}
            </h6>
            <div className="row">
              <div className="col-6 mb-2">
                <h5 className="mb-0">Original Release:</h5>{' '}
                <h4>
                  <Moment format="YYYY-MM-DD" className="text-gold">
                    {movie.release_date}
                  </Moment>
                </h4>
              </div>
              <div className="col-6 mb-2">
                <h5 className="mb-0">Runtime:</h5>{' '}
                <h4 className="text-gold">{movie.runtime} min</h4>
              </div>
              <div className="col-6 mb-2">
                <h5 className="mb-0">Box Office:</h5>
                <h4 className="text-gold">
                  $
                  {movie.revenue
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </h4>
              </div>
              <div className="col-6 mb-2">
                <h5 className="mb-0">Vote Average</h5>{' '}
                <h4 className="text-gold">{movie.vote_average} / 10</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
