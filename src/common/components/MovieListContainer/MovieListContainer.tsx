import React from 'react';
import './movieListContainer.css';
import SearchResults from '../SearchResults/SearchResults';
import NominationResults from '../NominationResults/NominationResults';
// Material UI Imports
import { Grid } from '@material-ui/core';

type Props = {
  searchTerm: string;
};

// The container is for both search results and nomination lists
const MovieListContainer = ({ searchTerm }: Props): JSX.Element => {
  return (
    <div className="movie-list-container">
      <Grid container justify="center">
        <Grid item xs={12} md={6} lg={5}>
          <SearchResults searchTerm={searchTerm} />
        </Grid>

        <Grid item xs={12} md={6} lg={5}>
          <NominationResults />
        </Grid>
      </Grid>
    </div>
  );
};

export default MovieListContainer;
