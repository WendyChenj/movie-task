import { Action } from 'redux';
import { MovieActionTypes, FETCH_MOVIE_LIST, INIT_MOVIE_LIST } from './movieActionTypes';
import * as types from '../../models/types';
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
): ThunkAction<void, RootState, unknown, Action<string>> => async (dispatch) => {
  fetch(`http://www.omdbapi.com/?s=${searchTerm}&apikey=ba6cc2fc&type=movie`)
    .then((response) => response.json())
    .then((json: ResponseAPI) => {
      if (json.Response === 'True') {
        const movieList: types.MovieList = json.Search.map((movie: MovieFromAPI) => ({
          id: movie.imdbID,
          title: movie.Title,
          year: movie.Year,
        }));
        console.log('json', json);
        dispatch(fetchMovieList(movieList));
      }
    });
};
