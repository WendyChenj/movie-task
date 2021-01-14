import React from 'react';
import * as types from '../../models/types';
import { useDispatch } from 'react-redux';
import { nominateMovie } from '../../store/movie/movieActionCreator';
import MovieItem from '../MovieItem/MovieItem';
import { Typography, List, ListItem, ListItemText, ListItemIcon, Button } from '@material-ui/core';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import './searchResults.css';

type Props = {
  searchTerm: string;
  searchResults: types.MovieList;
};

const SearchResults = ({ searchTerm, searchResults }: Props): JSX.Element => {
  const dispatch = useDispatch();

  const handleNominate = (e: React.MouseEvent, movie: types.Movie): void => {
    e.preventDefault();
    dispatch(nominateMovie(movie));
  };

  let resultsList: JSX.Element[] | null = null;
  let resultsText: JSX.Element | null = null;
  if (searchTerm === '') {
    resultsText = <Typography>Oops, seems you haven&#39;t started searching yet.</Typography>;
  } else if (searchTerm !== '' && searchResults === null) {
    resultsText = <Typography>Please be specific about your movie title</Typography>;
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
      {resultsText}
      <List>{resultsList}</List>
    </div>
  );
};

export default SearchResults;
