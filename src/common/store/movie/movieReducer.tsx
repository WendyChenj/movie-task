import * as types from '../../models/types';
import { MovieActionTypes, FETCH_MOVIE_LIST, INIT_MOVIE_LIST } from './movieActionTypes';

const initialState: types.MovieState = {
  movieList: null,
};

const moviesReducer = (state: types.MovieState = initialState, action: MovieActionTypes): types.MovieState => {
  switch (action.type) {
    case FETCH_MOVIE_LIST:
      return {
        ...state,
        movieList: action.movieList,
      };
    case INIT_MOVIE_LIST:
      return {
        ...state,
        movieList: null,
      };
    default:
      return state;
  }
};

export default moviesReducer;
