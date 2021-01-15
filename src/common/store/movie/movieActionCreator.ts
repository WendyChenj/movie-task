import { Action } from 'redux';
import {
  MovieActionTypes,
  FETCH_MOVIE_LIST,
  INIT_MOVIE_LIST,
  NOMINATE_MOVIE,
  REMOVE_NOMINATED_MOVIE,
} from './movieActionTypes';
import * as types from '../../models/types';
import { nominatedCheck } from '../../utils/utils';
import { RootState } from '../store';
import { ThunkAction } from 'redux-thunk';
interface MovieFromAPI {
  Title: string;
  Year: string;
  imdbID: string;
}

interface ResponseAPI {
  Response: string;
  Search: MovieFromAPI[];
  totalResults: number;
  Error: string;
}

export const initMovieList = (): MovieActionTypes => ({
  type: INIT_MOVIE_LIST,
});

export const fetchMovieList = (newMovieList: types.MovieList): MovieActionTypes => ({
  type: FETCH_MOVIE_LIST,
  movieList: newMovieList,
});

export const thunkSearchMovieList = (
  searchTerm: string,
  nominateList: types.NominateList,
): ThunkAction<void, RootState, unknown, Action<string>> => async (dispatch) => {
  // fetch movie results according to the search term from OMDB's API
  fetch(`https://www.omdbapi.com/?s=${searchTerm}&apikey=ba6cc2fc&type=movie`)
    .then((response) => response.json())
    .then((json: ResponseAPI) => {
      // Too many results will cause false reponse
      if (json.Response === 'True') {
        const movieList: types.MovieList = json.Search.map((movie: MovieFromAPI) => {
          // check if the movie is nominated or not and update the isNominated property
          let nominated = false;
          if (nominateList) {
            nominated = nominatedCheck(nominateList, movie.imdbID);
            return {
              id: movie.imdbID,
              title: movie.Title,
              year: movie.Year,
              isNominated: nominated,
            };
          } else {
            return {
              id: movie.imdbID,
              title: movie.Title,
              year: movie.Year,
              isNominated: false,
            };
          }
        });
        dispatch(fetchMovieList(movieList));
      }
    });
};

export const nominateMovie = (newMovie: types.Movie): MovieActionTypes => ({
  type: NOMINATE_MOVIE,
  movie: newMovie,
});

export const removeNominatedMovie = (newMovie: types.Movie): MovieActionTypes => ({
  type: REMOVE_NOMINATED_MOVIE,
  movie: newMovie,
});
