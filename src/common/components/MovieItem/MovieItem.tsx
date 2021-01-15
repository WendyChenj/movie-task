import React from 'react';
import * as types from '../../models/types';
import { ListItem, ListItemText, ListItemIcon, Button } from '@material-ui/core';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import './movieItem.css';

type Props = {
  movie: types.Movie;
  buttonTitle: string;
  buttonClick: (e: React.MouseEvent, movie: types.Movie) => void;
};

const MovieItem = ({ movie, buttonTitle, buttonClick }: Props): JSX.Element => {
  const movieInfo = `${movie.title}` + ' ( ' + `${movie.year}` + ' )';

  const NominateButton = () => {
    return (
      <Button variant="outlined" color="primary" onClick={(e) => buttonClick(e, movie)} disabled={movie.isNominated}>
        {buttonTitle}
      </Button>
    );
  };

  const RemoveNominateButton = () => {
    return (
      <Button variant="outlined" color="primary" onClick={(e) => buttonClick(e, movie)}>
        {buttonTitle}
      </Button>
    );
  };

  return (
    <ListItem key={movie.id} alignItems="flex-start" className="list-item">
      <ListItemIcon className="list-item-icon">
        <FiberManualRecordIcon className="dot-icon" />
      </ListItemIcon>
      <ListItemText primary={movieInfo} className="list-item-text" />
      <ListItemIcon className="list-item-icon">
        {buttonTitle === 'Nominate' ? <NominateButton /> : <RemoveNominateButton />}
      </ListItemIcon>
    </ListItem>
  );
};

export default MovieItem;
