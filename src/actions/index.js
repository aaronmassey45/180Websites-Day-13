import { CALL_API } from 'redux-api-middleware';

export const REQUEST = 'REQUEST';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

export function getSearchResults(movie) {
  const URL = `https://api.themoviedb.org/3/search/movie?api_key=b7e2e61e593bea093ce49458ec65f71b&query=${movie}`;

  return {
    [CALL_API]: {
      types: [REQUEST, SUCCESS, FAILURE],
      endpoint: URL,
      method: 'GET',
    },
  };
}
