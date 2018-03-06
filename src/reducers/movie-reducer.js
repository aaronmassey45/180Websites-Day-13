import { REQUEST, SELECT_SUCCESS, SELECT_FAILURE, SEARCH_SUCCESS, SEARCH_FAILURE } from '../actions';

const INITIAL_STATE = {
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

export default function movieData(state = INITIAL_STATE, action) {
	switch (action.type) {
		case SEARCH_SUCCESS:
			return { ...state, results: action.payload.results };
		case SELECT_SUCCESS:
			const { title, tagline, overview, poster_path, backdrop_path, vote_average, runtime, release_date, revenue } = action.payload;
			return {
				...state,
				results: [],
				selectedMovie: {
					title,
					tagline,
					overview,
					poster_path,
					backdrop_path,
					vote_average,
					runtime,
					release_date,
					revenue,
				},
			};
		default:
			return state;
	}
}
