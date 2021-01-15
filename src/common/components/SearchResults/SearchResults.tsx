import React from 'react';
import './searchResults.css';
import MovieItem from '../MovieItem/MovieItem';
import * as types from '../../models/types';
// Redux Imports
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { nominateMovie } from '../../store/movie/movieActionCreator';
// Material UI Imports
import { Typography, List } from '@material-ui/core';

type Props = {
  searchTerm: string;
};

const SearchResults = ({ searchTerm }: Props): JSX.Element => {
  // Get movie list from store
  const searchResults = useSelector((state: RootState) => state.movieList.movieList);
  const dispatch = useDispatch();

  // click button to nominate & dispatch action -> nominateMovie
  const handleNominate = (e: React.MouseEvent, movie: types.Movie): void => {
    e.preventDefault();
    dispatch(nominateMovie(movie));
  };

  let resultsList: JSX.Element[] | null = null;
  let instructionText: JSX.Element | null = null;

  if (searchTerm === '') {
    instructionText = <Typography>Oops, seems you haven&#39;t started searching yet.</Typography>;
  } else if (searchTerm !== '' && searchResults === null) {
    instructionText = <Typography>Please be specific about your movie title</Typography>;
  }

  if (searchResults) {
    resultsList = searchResults.map((movie) => (
      <MovieItem key={movie.id} movie={movie} buttonTitle="Nominate" buttonClick={handleNominate} />
    ));
  }

  return (
    <div className="results-container">
      <Typography variant="h6" className="results-text">
        Results for &quot; {searchTerm} &quot;:
      </Typography>

      {/* To give instruction at the beginning */}
      {instructionText}

      <List>{resultsList}</List>
    </div>
  );
};

export default SearchResults;
