import React from 'react';

const SelectedMovie = props => {
  const { title, tagline, overview, revenue, vote_average, release_date, runtime, backdrop_path, poster_path } = props.selectedMovie;
	const src = `https://image.tmdb.org/t/p/w500/${poster_path}`;
	return (
		<div className="SelectedMovie">
			<div className="row">
				<div className="col-sm-6">
					<img src={src} alt="Movie poster" className="poster img-responsive" />
				</div>
				<div className="col-sm-6">
					<div className="title gold">{title}</div>
					<div className="tagline gold">{tagline}</div>
					<div className="overview">{overview}</div>
					<div className="row stuff">
						<div className="col-sm-6">
							<div className="gold row">Revenue:</div>
							<div className="row">${revenue}</div>
						</div>
						<div className="col-sm-6">
							<div className="gold row">Rating:</div>
							<div className="row">{vote_average}</div>
						</div>
						<div className="col-sm-6">
							<div className="gold row">Release Date:</div>
							<div className="row">{release_date}</div>
						</div>
						<div className="col-sm-6">
							<div className="gold row">Runtime:</div>
							<div className="row">{runtime}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SelectedMovie;
