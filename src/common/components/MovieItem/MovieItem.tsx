import React from 'react';
import './movieItem.css';
import * as types from '../../models/types';
// Material UI Imports
import { ListItem, ListItemText, ListItemIcon, Button, IconButton } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';

type Props = {
  movie: types.Movie;
  buttonTitle: string;
  buttonClick: (e: React.MouseEvent, movie: types.Movie) => void;
};

// A piece of movie item including the title, year & a button for nominating or removing
const MovieItem = ({ movie, buttonTitle, buttonClick }: Props): JSX.Element => {
  const matches = useMediaQuery('(min-width:600px)');
  const movieInfo = `${movie.title}` + ' ( ' + `${movie.year}` + ' )';

  // Button for responsive layout
  const NominateButton = () => {
    if (matches) {
      return (
        <Button variant="outlined" color="primary" onClick={(e) => buttonClick(e, movie)} disabled={movie.isNominated}>
          {buttonTitle}
        </Button>
      );
    } else {
      // Width under 600px using this button
      return (
        <IconButton color="primary" onClick={(e) => buttonClick(e, movie)} disabled={movie.isNominated}>
          <AddIcon />
        </IconButton>
      );
    }
  };

  // Responsive button
  const RemoveNominateButton = () => {
    if (matches) {
      return (
        <Button variant="outlined" color="primary" onClick={(e) => buttonClick(e, movie)}>
          {buttonTitle}
        </Button>
      );
    } else {
      // Width under 600px using this button
      return (
        <Button color="primary" onClick={(e) => buttonClick(e, movie)}>
          <DeleteIcon />
        </Button>
      );
    }
  };

  return (
    <ListItem key={movie.id} alignItems="flex-start" className="list-item">
      <ListItemIcon className="list-item-icon">
        <FiberManualRecordIcon className="dot-icon" />
      </ListItemIcon>

      {/* The information about the movie including name and year */}
      <ListItemText primary={movieInfo} className="list-item-text" />

      <ListItemIcon className="list-item-icon">
        {buttonTitle === 'Nominate' ? <NominateButton /> : <RemoveNominateButton />}
      </ListItemIcon>
    </ListItem>
  );
};

export default MovieItem;
