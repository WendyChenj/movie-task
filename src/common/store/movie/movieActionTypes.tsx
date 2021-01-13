import * as types from '../../models/types';

export const FETCH_MOVIE_LIST = '[Movie List] Fetch Movie List';

interface FetchMovieListAction {
  type: typeof FETCH_MOVIE_LIST;
  movieList: types.MovieList;
}

export type MovieActionTypes = FetchMovieListAction;
