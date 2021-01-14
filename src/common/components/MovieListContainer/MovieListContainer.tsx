import React from 'react';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';
import SearchResults from '../SearchResults/SearchResults';
import NominationResults from '../NominationResults/NominationResults';
import { Grid, Typography } from '@material-ui/core';

import './movieListContainer.css';

type Props = {
  searchTerm: string;
};

const MovieListContainer = ({ searchTerm }: Props): JSX.Element => {
  const searchResults = useSelector((state: RootState) => state.movieList.movieList);

  return (
    <div className="movie-list-container">
      <Grid container justify="center">
        <Grid item xs={10} sm={5}>
          <SearchResults searchTerm={searchTerm} searchResults={searchResults} />
        </Grid>
        <Grid item xs={10} sm={5}>
          <NominationResults />
        </Grid>
      </Grid>
    </div>
  );
};

export default MovieListContainer;
