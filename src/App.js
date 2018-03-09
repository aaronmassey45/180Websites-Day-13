import React, { Component } from 'react';
import { connect } from 'react-redux';

import Navbar from './navbar';
import SearchBar from './components/SearchBar';
import SelectedMovie from './components/SelectedMovie';

import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Navbar />
				<div className="container">
					<SearchBar />
					{this.props.selectedMovie.title ? (
						<SelectedMovie selectedMovie={this.props.selectedMovie} />
					) : null}
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	selectedMovie: state.movieData.selectedMovie,
});

export default connect(mapStateToProps)(App);
