import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import { MenuItem } from 'material-ui/Menu';
import Downshift from 'downshift';
import _ from 'lodash.custom.min'

import { getSearchResults, selectMovie } from '../actions';

class SearchBar extends Component {
	componentDidMount() {
		this.props.selectMovie(10897);
	}

	searchMovies = movie => {
		if (movie) this.props.getSearchResults(movie);
	};

	renderMenuItem = movie => {
    const { id, release_date, title } = movie;
		return (
			<MenuItem key={id} onClick={() => this.props.selectMovie(id)}>
				{title}&nbsp;{release_date ? (<i>{new Date(release_date).getFullYear()}</i>) : null}
			</MenuItem>
		);
	};

	renderInput = inputProps => {
		const { InputProps, InputProps: { label }, ...others } = inputProps;
		return (
			<TextField InputProps={{ ...InputProps }} label={label} {...others} />
		);
	};

	getSuggestions = (inputValue, suggestions) => {
		let count = 0;

		return suggestions.filter(suggestion => {
			const keep =
				(!inputValue ||
					suggestion.title.toLowerCase().includes(inputValue.toLowerCase())) &&
				count < 5;

			if (keep) count += 1;

			return keep;
		});
	};

	render() {
		const searchMovies = _.debounce(movie => this.searchMovies(movie), 300, {
			maxWait: 300
		});
		return (
			<div>
				<div className="SearchBar">
					<div className="row">
						<div className="col-sm-4">
							<a href="https://www.themoviedb.org/">
								<p>Powered by</p>
								<p>The Movie Db</p>
							</a>
						</div>
						<div className="col-sm-8">
							<Downshift>
								{({
									getInputProps,
									getItemProps,
									getLabelProps,
									isOpen,
									inputValue,
									highlightedIndex,
									selectedItem,
								}) => (
									<div>
										{this.renderInput({
											fullWidth: true,
											InputProps: getInputProps({
												label: 'Search movies with tMDB!',
												onChange: event => searchMovies(inputValue),
												value: inputValue,
											}),
										})}
										{isOpen ? (
											<Paper>
												{this.getSuggestions(
													inputValue,
													this.props.results
												).map(movie => this.renderMenuItem(movie))}
											</Paper>
										) : null}
									</div>
								)}
							</Downshift>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	results: state.movieData.results,
	selectedMovie: state.movieData.selectedMovie,
});

const mapDispatchToProps = dispatch => {
	return bindActionCreators({ getSearchResults, selectMovie }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
