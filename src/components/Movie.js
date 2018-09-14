import React from 'react';
import { Link } from 'react-router-dom';

const Movie = ({ movie }) => {
  return (
    <div className="col-md-6">
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h5>{movie.title}</h5>
          <p className="card-text">
            <b>
              <i className="far fa-calendar-alt" /> Released
            </b>
            : {movie.release_date}
            <br />
            <b>
              <i className="far fa-star" /> Rating
            </b>
            : {movie.vote_average * 10}%
          </p>
          <Link to={`/movies/${movie.id}`} className="btn btn-dark btn-block">
            <i className="fas fa-chevron-right" /> View Info
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Movie;
