import React from 'react';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';
import { Grid, Typography, List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import './movieListContainer.css';

type Props = {
  searchTerm: string;
};

const MovieListContainer = ({ searchTerm }: Props): JSX.Element => {
  const searchResults = useSelector((state: RootState) => state.movieList.movieList);

  let resultsList: JSX.Element[] | null = null;
  let resultsText: JSX.Element | null = null;

  if (searchTerm === '') {
    resultsText = <Typography>Oops, seems you haven&#39;t started searching yet.</Typography>;
  } else if (searchTerm !== '' && searchResults === null) {
    resultsText = <Typography>Please be specific about your movie title</Typography>;
  }

  if (searchResults) {
    resultsList = searchResults.map((movie) => {
      const movieInfo = `${movie.title}` + ' ( ' + `${movie.year}` + ' )';
      return (
        <ListItem key={movie.id} alignItems="flex-start">
          <ListItemIcon className="list-item-icon">
            <FiberManualRecordIcon className="dot-icon" />
          </ListItemIcon>
          <ListItemText primary={movieInfo} />
        </ListItem>
      );
    });
  }

  return (
    <div className="movie-list-container">
      <Grid container justify="center">
        <Grid item xs={10} sm={5}>
          <div className="results-container">
            <Typography variant="h6" className="results-text">
              Results for &quot; {searchTerm} &quot;:
            </Typography>
            {resultsText}
            <List>{resultsList}</List>
          </div>
        </Grid>
        <Grid item xs={10} sm={5}>
          <div className="results-container">
            <Typography variant="h6">Nominations</Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default MovieListContainer;
