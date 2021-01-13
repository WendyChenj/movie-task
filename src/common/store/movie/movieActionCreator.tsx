import { Action } from 'redux';
import { MovieActionTypes, FETCH_MOVIE_LIST } from './movieActionTypes';
import * as types from '../../models/types';
import { RootState } from '../store';
import { ThunkAction } from 'redux-thunk';

interface MovieFromAPI {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
}

interface ResponseAPI {
  Response: boolean;
  Search: MovieFromAPI[];
  totalResults: number;
}

export const fetchMovieList = (newMovieList: types.MovieList): MovieActionTypes => ({
  type: FETCH_MOVIE_LIST,
  movieList: newMovieList,
});

export const thunkSearchMovieList = (): ThunkAction<void, RootState, unknown, Action<string>> => async (dispatch) => {
  fetch('http://www.omdbapi.com/?s=wonder&apikey=ba6cc2fc&type=movie')
    .then((response) => response.json())
    .then((json: ResponseAPI) => {
      console.log(json);
      const movieList: types.MovieList = json.Search.filter((movie) => movie.Type === 'movie').map(
        (movie: MovieFromAPI) => ({
          id: movie.imdbID,
          title: movie.Title,
          year: movie.Year,
        }),
      );
      dispatch(fetchMovieList(movieList));
    });
};
