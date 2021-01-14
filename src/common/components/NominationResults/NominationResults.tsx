import React from 'react';
import * as types from '../../models/types';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { removeNominatedMovie } from '../../store/movie/movieActionCreator';
import MovieItem from '../MovieItem/MovieItem';
import { Typography, List } from '@material-ui/core';

// type Props = {
//   searchTerm: string;
//   searchResults: types.MovieList;
// };

const NominationResults = (): JSX.Element => {
  const nominateResults = useSelector((state: RootState) => state.movieList.nominateList);
  const dispatch = useDispatch();

  const handleRemoveNominate = (e: React.MouseEvent, movie: types.Movie): void => {
    e.preventDefault();
    dispatch(removeNominatedMovie(movie));
  };

  let resultsList: JSX.Element[] | null = null;
  let resultsText: JSX.Element | null = null;

  // resultsText = <Typography>Please be specific about your movie title</Typography>;

  if (nominateResults) {
    resultsList = nominateResults.map((movie: types.Movie) => (
      <MovieItem key={movie.id} movie={movie} buttonTitle="Remove" buttonClick={handleRemoveNominate} />
    ));
  }

  if (!resultsList) {
    resultsText = <Typography>Choose the best movie for nomination!</Typography>;
  }

  return (
    <div className="results-container">
      <Typography variant="h6" className="results-text">
        Nomination:
      </Typography>
      {resultsText}
      <List>{resultsList}</List>
    </div>
  );
};

export default NominationResults;
