import * as types from '../../models/types';

export const FETCH_MOVIE_LIST = '[Movie List] Fetch Movie List';
export const INIT_MOVIE_LIST = '[Movie List] Init Movie List';

interface FetchMovieListAction {
  type: typeof FETCH_MOVIE_LIST;
  movieList: types.MovieList;
}

interface InitMovieListAction {
  type: typeof INIT_MOVIE_LIST;
}

export type MovieActionTypes = FetchMovieListAction | InitMovieListAction;
