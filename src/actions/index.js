import { CALL_API } from 'redux-api-middleware';

export const REQUEST = 'REQUEST';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const SEARCH_FAILURE = 'SEARCH_FAILURE';
export const SELECT_SUCCESS = 'SELECT_SUCCESS';
export const SELECT_FAILURE = 'SELECT_FAILURE';

const API_KEY = 'b7e2e61e593bea093ce49458ec65f71b'

export function getSearchResults(movie) {
  const URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${movie}`;
  return {
    [CALL_API]: {
      types: [REQUEST, SEARCH_SUCCESS, SEARCH_FAILURE],
      endpoint: URL,
      method: 'GET',
    },
  };
}

export function selectMovie(id) {
  const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
  return {
    [CALL_API]: {
      types: [REQUEST, SELECT_SUCCESS, SELECT_FAILURE],
      endpoint: URL,
      method: 'GET',
    },
  };
}
