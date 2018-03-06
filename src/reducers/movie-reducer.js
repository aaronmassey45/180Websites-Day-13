import { REQUEST, SUCCESS, FAILURE } from '../actions';

const INITIAL_STATE = {};

export default function movieData(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SUCCESS:
      return { ...state, data: action.payload };
    default:
      return state;
  }
}
