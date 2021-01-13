export interface Movie {
  id: string;
  title: string;
  year: string;
}

export type MovieList = Movie[] | null;

export interface MovieState {
  movieList: MovieList;
}
