import { REQUEST, SUCCESS, FAILURE } from '../actions';

const INITIAL_STATE = {
  results: [],
  selectedMovie: {
    title: '',
    tagline: '',
    overview: '',
    poster: '',
    backdrop: '',
    rating: '',
    runtime: '',
    release: '',
    revenue: '',
  }
};

export default function movieData(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SUCCESS:
    console.log(action.payload);
      return { ...state, results: action.payload.results };
    default:
      return state;
  }
}
