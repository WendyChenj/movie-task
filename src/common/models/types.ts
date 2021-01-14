export interface Movie {
  id: string;
  title: string;
  year: string;
  isNominated: boolean;
}

export type MovieList = Movie[] | null;

export type NominateList = Movie[] | null;

export interface MovieState {
  movieList: MovieList;
  nominateList: NominateList;
}
