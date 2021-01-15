import * as types from '../../models/types';
import {
  MovieActionTypes,
  FETCH_MOVIE_LIST,
  INIT_MOVIE_LIST,
  NOMINATE_MOVIE,
  REMOVE_NOMINATED_MOVIE,
} from './movieActionTypes';

const initialState: types.MovieState = {
  movieList: null,
  nominateList: null,
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
    case NOMINATE_MOVIE:
      let newNominatedMovieList: types.MovieList = state.movieList;
      let newNominatedMovie: types.Movie = action.movie;

      // update isNominated property to true, update movie list
      if (state.movieList) {
        newNominatedMovieList = state.movieList.map((movie) => {
          if (movie.id === action.movie.id) {
            newNominatedMovie = {
              ...action.movie,
              isNominated: true,
            };
            return newNominatedMovie;
          }
          return movie;
        });
      }
      // add the nominee into nominate list
      if (state.nominateList) {
        return {
          movieList: newNominatedMovieList,
          nominateList: [...state.nominateList, newNominatedMovie],
        };
      } else {
        return {
          movieList: newNominatedMovieList,
          nominateList: [newNominatedMovie],
        };
      }
    case REMOVE_NOMINATED_MOVIE:
      let removeNominatedMovieList: types.MovieList = state.movieList;
      let newNominateList: types.MovieList = state.nominateList;

      // remove movie from nomination list: if there is only one movie in the list, update the nominationList to null
      if (newNominateList && newNominateList.length === 1) {
        newNominateList = null;
      } else if (newNominateList) {
        newNominateList = newNominateList.filter((movie) => movie.id !== action.movie.id);
      }
      // update the nominate status of movies in movie list
      if (state.movieList) {
        removeNominatedMovieList = state.movieList.map((movie) => {
          if (movie.id === action.movie.id) {
            return {
              ...action.movie,
              isNominated: false,
            };
          }
          return movie;
        });
      }
      return {
        movieList: removeNominatedMovieList,
        nominateList: newNominateList,
      };
    default:
      return state;
  }
};

export default moviesReducer;
