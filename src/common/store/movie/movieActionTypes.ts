import * as types from '../../models/types';

export const FETCH_MOVIE_LIST = '[Search Results] Fetch Movie List';
export const INIT_MOVIE_LIST = '[Search Results] Init Movie List';
export const NOMINATE_MOVIE = '[Nominate Results & Search Results] Nominate Movie';
export const REMOVE_NOMINATED_MOVIE = '[Nominate Results & Search Results] Remove Nominated Movie';

interface FetchMovieListAction {
  type: typeof FETCH_MOVIE_LIST;
  movieList: types.MovieList;
}

interface InitMovieListAction {
  type: typeof INIT_MOVIE_LIST;
}

interface NominateMovieAction {
  type: typeof NOMINATE_MOVIE;
  movie: types.Movie;
}

interface RemoveNominatedMovieAction {
  type: typeof REMOVE_NOMINATED_MOVIE;
  movie: types.Movie;
}

export type MovieActionTypes =
  | FetchMovieListAction
  | InitMovieListAction
  | NominateMovieAction
  | RemoveNominatedMovieAction;
