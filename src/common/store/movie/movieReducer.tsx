import * as types from '../../models/types';
import { MovieActionTypes, FETCH_MOVIE_LIST } from './movieActionTypes';

const initialState: types.MovieState = {
  movieList: null,
};

const moviesReducer = (state: types.MovieState = initialState, action: MovieActionTypes) => {
  switch (action.type) {
    case FETCH_MOVIE_LIST:
      return {
        ...state,
        movieList: action.movieList,
      };
    default:
      return state;
  }
};

export default moviesReducer;
